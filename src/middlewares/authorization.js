//userModel
const userModel = require("../models/userModel.js")
//isAdmin
const isAdmin = async (req, res, next) => {
  const user = await userModel.findById(req.userId)
  if (!user) return res.status(401).json({ message: "unauthorized user" })
  if (user.role != "admin") return res.status(401).json({ message: "unauthorized user" })
  next()
}
//Admin or User
const isAdminOrUser = async (req, res, next) => {
  const user = await userModel.findById(req.userId)
  if (!user) return res.status(401).json({ message: "unauthorized user" })
  console.log(user)
  if (user.role != 'user' && user.role != 'admin') return res.status(401).json({ message: "unauthorized user" })
 
  next()
}
module.exports = { isAdmin, isAdminOrUser }