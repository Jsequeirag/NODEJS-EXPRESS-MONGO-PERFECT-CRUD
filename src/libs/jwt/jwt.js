const jwt = require("jsonwebtoken")

const signToken = (userId) => {
  const token = jwt.sign({ id: userId }, "secret", {
    expiresIn: 60 * 60 * 24
  })
  console.log(token)
  return token;
}

const verifyToken = (token) => {
  const verifiedToken = jwt.verify(token, "secret")
  console.log(verifiedToken)
  return verifiedToken
}

module.exports = { signToken, verifyToken }