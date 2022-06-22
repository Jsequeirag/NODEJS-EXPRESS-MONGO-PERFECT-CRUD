//jwt
const {verifyToken}=require("../libs/jwt/jwt.js")
//router
const router = require("express").Router()
//controllers
const {getCategory,createCategory,updateCategory,deleteCategory}=require("../controllers/categoryControllers.js")
//routes
router.get("/",verifyToken,getCategory)

router.post("/",verifyToken,createCategory)

router.put("/:id",verifyToken, updateCategory)

router.delete("/:id",verifyToken, deleteCategory)
//export
module.exports = router