//router
const router = require("express").Router()
//constrollers
const {getCategory,createCategory,updateCategory,deleteCategory}=require("../controllers/categoryControllers.js")
//routes
router.get("/",getCategory)

router.post("/",createCategory)

router.put("/:id", updateCategory)

router.delete("/:id", deleteCategory)
//export
module.exports = router