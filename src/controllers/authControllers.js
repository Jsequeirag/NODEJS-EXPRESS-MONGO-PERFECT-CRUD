const userModel = require("../models/userModel.js")
const signUp = async (req, res) => {
  try {
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: await
        userModel.encryptPassword(req.body.password)
    })
    await newUser.save()
    res.status(200).json(newUser)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}

const signIn = async (req, res) => {
  
  const user = await userModel.findOne({
    email: req.body.email
  })
  
  if (!user) return res.status(200).json({
    message: "user doesn't exist"
  })
  
  const comparedPassword = await userModel.comparePassword(req.body.password, user.password)
  console.log(comparedPassword)
  if(!comparedPassword) return res.status(200)
.json({message:"wrong password"})
  const {password,...newuser}=user._doc
  res.status(200).json(newuser)
}

module.exports = { signUp, signIn }