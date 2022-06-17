const jwt = require("jsonwebtoken")
const signToken = (userId) => {
  const token = jwt.sign({ id: userId }, "secret", {
    expiresIn: 60 * 60 * 24
  })
  console.log(token)
  return token;
}
const verifyToken = (userId) => { }

module.exports={signToken,verifyToken}