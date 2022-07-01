const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category:{
    type: Schema.Types.ObjectId,
    required: true,
    ref:"category"
  },  
}, { timestamps: true, versionKey: false })

const  productModel=model("product",productSchema);

module.exports=productModel