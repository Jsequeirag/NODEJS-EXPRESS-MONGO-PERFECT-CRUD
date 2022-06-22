const {verifyToken}=require("../middlewares/jwt.js")
//router
const router=require("express").Router()
//authorization
const {isAdminOrUser}=require("../middlewares/authorization.js")
//controllers
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct}=require("../controllers/productControllers")
//routes
router.get("/",verifyToken,isAdminOrUser,getProducts)
router.get("/:id",verifyToken,isAdminOrUser,getProductById)
router.post("/",verifyToken,isAdminOrUser,createProduct)
router.put("/:id",verifyToken,isAdminOrUser,updateProduct)
router.delete("/:id",verifyToken,isAdminOrUser,deleteProduct)
//export
module.exports=router