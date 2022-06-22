//model
const productModel = require("../models/productModel")
const categoryModel = require("../models/categoryModel")
//get
const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({})
    console.log(products)
    res.status(200).json(products)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//get by id
const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params._id)
    if (!product) return res.status(200).json({
      message: "product does't exist"
    })
    res.status(200).json(product)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//create
const createProduct = async (req, res) => {
  try {
    const product = await productModel.findOne({ name: req.body.name })
    if (product) return res.status(200).json({
      message: "this product really exists"
    })

    const category = await categoryModel.findOne({
      _id: req.body.category
    })
    if (!category) return res.status(200).json({
      message: "this category doesn't exist"
    })

    const newProduct = new productModel(req.body)
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)

  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//update
const updateProduct = async (req, res) => {
  try {
    var product = await productModel.findById(req.params.id)
    if (!product) return res.status(200).json({ message: "This product doesn't exist" })

    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedProduct)

  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//delete
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productModel.findOneAndDelete(req.params.id)
    res.status(200).json(deletedProduct)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

//export
module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct }