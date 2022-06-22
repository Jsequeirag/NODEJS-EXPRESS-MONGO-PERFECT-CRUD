//router
const router = require("express").Router()
//controllers
const {signUp,signIn}  = require("../controllers/authControllers")
//routes
router.post("/signup", signUp)
router.post("/signin", signIn)
module.exports = router;