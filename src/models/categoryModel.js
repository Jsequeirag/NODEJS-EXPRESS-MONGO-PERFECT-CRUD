const { Schema, model } = require("mongoose")

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true, versionKey: false })

const categoryModel = model("category", categorySchema)

module.exports = categoryModel