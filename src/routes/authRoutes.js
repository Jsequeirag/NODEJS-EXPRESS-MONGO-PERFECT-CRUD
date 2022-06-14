const router = require("express").Router()
const {signUp,signIn}  = require("../controllers/authControllers")
router.post("/signup", signUp)
router.post("/signin", signIn)
module.exports = router;