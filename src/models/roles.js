const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({

    name:{
        type:String,
        unique: true
    },
    created_at:{
        type:Date
    },
    updated_at: {
        type: Date
    },
})