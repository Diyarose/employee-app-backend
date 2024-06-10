const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "empname":String,
        "empid":String,
        "mobile":String,
        "email":String,
        
    }
)
let employeemodel=mongoose.model("employees",schema);
module.exports={employeemodel}