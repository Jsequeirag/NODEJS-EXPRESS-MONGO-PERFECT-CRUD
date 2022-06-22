//userModel
const userModel=require("../models/userModel.js")
//isAdmin
const isAdmin=async(req,res,next)=>{
  const user=await userModel.findById(req.userId)
  console.log(user)
}
//isUser
const isUser=async(req,res,next)=>{
  const user=await userModel.findById(req.userId)
  console.log(user)
}
module.exports={isAdmin,isUser}