const userModel = require("../models/userModel.js")
const {signToken}=require("../middlewares/jwt.js")

//signUp
const signUp = async (req, res) => {
  try {
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      role:req.body.role,
      password: await
        userModel.encryptPassword(req.body.password)
    })
    const userSaved=await newUser.save()
    res.status(200).json(userSaved)
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e })
  }
}
//signIn
const signIn = async (req, res) => {
  
  const user = await userModel.findOne({
    email: req.body.email
  })
  
  if (!user) return res.status(200).json({
    message: "user doesn't exist"
  })
  
  const comparedPassword = await userModel.comparePassword(req.body.password, user.password)
  
  if(!comparedPassword) return res.status(200)
.json({message:"wrong password"})
  
  const token=signToken(user._id)
  
  const {password,...newuser}=user._doc
  
  res.status(200).json({user,token})
}

module.exports = { signUp, signIn }