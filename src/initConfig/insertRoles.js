const roleModel = require("../models/roleModel.js");


module.exports = async () => {
  const roles = await roleModel.estimatedDocumentCount()
  if (roles > 0) {
    
    return null
  } else {
     const admin=new roleModel({name:"admin"})
     const user=new roleModel({name:"user"})
     await admin.save()
     await user.save()
 
  }
}

