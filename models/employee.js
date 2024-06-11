

const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        
        "employeeId": {type:String,required:true},
        "firstname": {type:String,required:true},
       "lastname":  {type:String,required:true},
       "dob":{type:String,required:true},
        "mob":  {type:String,required:true},
        "email":  {type:String,required:true},
        "address":  {type:String,required:true}
    }
)

let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}