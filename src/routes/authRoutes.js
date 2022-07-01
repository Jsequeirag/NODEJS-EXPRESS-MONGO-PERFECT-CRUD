
//router
const router = require("express").Router()
//controllers
const { signUp, signIn } = require("../controllers/authControllers")
//validators
const { authErrorHandler, signUpValidator ,signInValidator} = require("../middlewares/validators/authAuthenticator.js")
//routes
router.post("/signup",signUpValidator,authErrorHandler, signUp)
router.post("/signin",signInValidator ,authErrorHandler,signIn)
module.exports = router;