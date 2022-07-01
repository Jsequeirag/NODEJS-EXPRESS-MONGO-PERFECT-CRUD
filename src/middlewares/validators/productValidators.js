const { body, validationResult, param } = require("express-validator")
//error handler
const productErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({
    errors: errors.array()
  })
  console.log("asd")
  next()
}

//create product
const createValidator = [
  body("name").exists().isLength({ min: 2 }).trim(),
  body("description").exists().isLength({ min: 2 }),
  body("price").exists().isNumeric(),
  body("quantity").exists().isNumeric(),
  body("category").exists().isLength({ min: 2 }).trim()
]
//delete product
const deleteValidator = [
  param("id").exists().isMongoId()
]
//update product
const updateValidator = [
  param("id").isMongoId(),
  body("name").isLength({ min: 2 }).trim(),
  body("description").isLength({ min: 2 }),
  body("price").isNumeric(),
  body("quantity").isNumeric(),
  body("category").isLength({ min: 2 }).trim()]

module.exports = { createValidator ,deleteValidator,updateValidator,productErrorHandler}