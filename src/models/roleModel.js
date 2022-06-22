const {Schema,model}=require("mongoose")

const roleSchema=new Schema({
  name:{
    type:String,required:true
  }
},{versionKey:false,timestamp:true})

const roleModel=model("role",roleSchema)

module.exports=roleModel