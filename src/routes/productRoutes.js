const {verifyToken}=require("../middlewares/jwt.js")
//router
const router=require("express").Router()
//controllers
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct}=require("../controllers/productControllers")
//routes
router.get("/",verifyToken,getProducts)
router.get("/:id",verifyToken,getProductById)
router.post("/",verifyToken,createProduct)
router.put("/:id",verifyToken,updateProduct)
router.delete("/:id",verifyToken,deleteProduct)
//export
module.exports=router