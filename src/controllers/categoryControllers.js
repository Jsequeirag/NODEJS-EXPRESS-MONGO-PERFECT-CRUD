//model
const categoryModel = require("../models/categoryModel.js")

//get
const getCategory = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    console.log(categories)
    res.status(200).json(categories)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//post
const createCategory = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ name: req.body.name })
    if (category) return res.status(200).json({
      message: "this category really exists"
    })
    const newCategory = new categoryModel(req.body)
    const savedCategory = await newCategory.save()
    res.status(200).json(savedCategory)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//update
const updateCategory = async (req, res) => {
  try {
    var category = await categoryModel.findById(req.params.id)
    if (!category) return res.status(200).json({ message: "category doesn't exist" })
    category = await categoryModel.findOne({ name: req.body.name })
    if (category)
      return res.status(200).json({ message: "category really exists" })
    const updatedCategory = await categoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedCategory)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//delete
const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedCategory)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//exports
module.exports = { getCategory, createCategory, updateCategory, deleteCategory }