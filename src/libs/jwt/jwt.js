const jwt = require("jsonwebtoken")

const signToken = (userId) => {
  const token = jwt.sign({ id: userId }, "secret", {
    expiresIn: 60 * 60 * 24
  })
  console.log(token)
  return token;
}

const verifyToken = (req,res,next) => {
  try{
   const token=req.header("x-access-token")
   const verifiedToken = jwt.verify(token, "secret")
   req.userId=verifiedToken.id
   next()
   }catch(e){
    console.log(e)
    res.status(500).json({message:e})
   }
   
}

module.exports = { signToken, verifyToken }