//packages
const { body, validationResult } = require("express-validator");
//error handler
const authErrorHandler = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({
    errors: errors.array()
  })
  next()
}
//signup validator
const signUpValidator = [
  body("email").isEmail().trim(),
  body("name").exists().isLength({ min: 5 }),
  body("password").exists().isLength({ min: 6, max: 10 }),
  body("role").exists()
]
//signin validator
const signInValidator = [body("email").isEmail().trim(), body("password").exists().isLength({ min: 6, max: 10 })]

module.exports = { authErrorHandler, signUpValidator,signInValidator }