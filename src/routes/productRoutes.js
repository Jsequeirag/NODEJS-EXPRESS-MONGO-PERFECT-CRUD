//router
const router=require("express").Router()
//controllers
const {getProducts,getProductById,createProduct,updateProduct,deleteProduct}=require("../controllers/productControllers")
//routes
router.get("/",getProducts)
router.get("/:id",getProductById)
router.post("/",createProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)
//export
module.exports=router