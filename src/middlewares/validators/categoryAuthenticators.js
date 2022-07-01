const { body, validationResult,param } = require("express-validator")
//error handler
const categoryErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({
    errors: errors.array()
  })
  next()
}

//create category
const createValidator = [
  body("name").exists().isLength({ min: 3 }).trim()
]
//delete category
const deleteValidator = [
  param("id").exists().isMongoId()
]
//update category
const updateValidator = [
  body("name").exists().isLength({ min: 3 }).trim(),
  param("id").exists().isMongoId()
]
module.exports = { categoryErrorHandler, createValidator, deleteValidator, updateValidator }