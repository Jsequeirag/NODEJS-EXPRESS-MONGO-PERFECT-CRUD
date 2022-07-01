//jwt
const { verifyToken } = require("../middlewares/jwt.js")
//authorization
const { isAdmin, isAdminOrUser } = require("../middlewares/authorization.js")
//router
const router = require("express").Router()
//controllers
const { getCategory, createCategory, updateCategory, deleteCategory } = require("../controllers/categoryControllers.js")
//validators
const { categoryErrorHandler, createValidator, deleteValidator, updateValidator } = require("../middlewares/validators/categoryAuthenticators.js")
//routes
router.get("/", verifyToken, isAdminOrUser, getCategory)

router.post("/", verifyToken,isAdmin, createValidator, categoryErrorHandler,  createCategory)

router.put("/:id", verifyToken, isAdmin,updateValidator, categoryErrorHandler,  updateCategory)

router.delete("/:id",verifyToken, isAdmin, deleteValidator, categoryErrorHandler, deleteCategory)
//export
module.exports = router