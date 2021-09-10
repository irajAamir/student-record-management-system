const mongoose = require("mongoose")
const registrationSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    userType:{
        type: String,
        enum : ['STUDENT','ADMIN'],
        default: 'STUDENT'
    }
})

//create collection

module.exports = mongoose.model("Register", registrationSchema);