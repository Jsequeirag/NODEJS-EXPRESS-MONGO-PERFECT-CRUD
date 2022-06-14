const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new Schema({
  email: { type: String, lowercase: true, trim: true },
  name: { type: String, lowercase: true, trim: true },
  password: { type: String }
}, { timestamps: true, versionKey: false })

//static method-encrypt password
userSchema.statics.encryptPassword = async function(password) {
  const hashedPassword = await bcrypt.hash(password, 10)
  console.log(hashedPassword)
  return hashedPassword;
}
userSchema.statics.comparePassword = async function(password, hashedPassword) {
  const comparedPassword = await bcrypt.compare(password, hashedPassword)
  console.log(hashedPassword)
  return comparedPassword;
}
const userModel = model("user", userSchema);

module.exports = userModel;