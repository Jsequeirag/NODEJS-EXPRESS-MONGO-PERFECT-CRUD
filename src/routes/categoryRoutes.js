//jwt
const {verifyToken}=require("../middlewares/jwt.js")
//authorization
const {isAdmin,isAdminOrUser}=require("../middlewares/authorization.js")
//router
const router = require("express").Router()
//controllers
const {getCategory,createCategory,updateCategory,deleteCategory}=require("../controllers/categoryControllers.js")
//routes
router.get("/",verifyToken,isAdminOrUser,getCategory)

router.post("/",verifyToken,isAdmin,createCategory)

router.put("/:id",verifyToken,isAdmin,updateCategory)

router.delete("/:id",verifyToken,isAdmin,deleteCategory)
//export
module.exports = router