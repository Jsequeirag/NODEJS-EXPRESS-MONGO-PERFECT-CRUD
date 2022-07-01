const { verifyToken } = require("../middlewares/jwt.js")
//router
const router = require("express").Router()
//authorization
const { isAdminOrUser } = require("../middlewares/authorization.js")
//controllers
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/productControllers")
//validators
const {  createValidator ,deleteValidator,updateValidator,productErrorHandler } = require("../middlewares/validators/productValidators")

//routes
router.get("/", verifyToken, isAdminOrUser, getProducts)
router.get("/:id", verifyToken, isAdminOrUser, getProductById)
router.post("/", verifyToken, isAdminOrUser,createValidator,productErrorHandler, createProduct)
router.put("/:id", verifyToken, isAdminOrUser, updateValidator,productErrorHandler,updateProduct)
router.delete("/:id", verifyToken, isAdminOrUser,deleteValidator,productErrorHandler, deleteProduct)
//export
module.exports = router