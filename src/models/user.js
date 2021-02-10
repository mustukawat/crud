const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

 
 
 first_name:{
     type:String,
     required: true
 },
 last_name: {
        type: String,
        required: true
    },
 password: {
        type: String,
        required: true
    },
 image:{
        type: String,
        required: true
    },


 email:{
     type: String,
     unique:true
 },

 code:{
     type: String,
     unique: true
 },
 phone:{
     type:Number,
     unique:true
 },
  
 created_at:{
     type:Date
 },

 updated_at: {
       type: Date
    },

deleted_at: {
       type: Date
    },

 

 

 
})


const user = new mongoose.model("user",userSchema)
module.exports = user;