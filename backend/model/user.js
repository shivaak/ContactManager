const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type: String,
        required: [true, "username is mandatory"]
    },
    email : {
        type: String,
        required: [true, "email is mandatory"]
    },
    password : {
        type: String,
        required: [true, "password mandatory"]
    } 
},
{
    timestamps:true
}
)

module.exports = mongoose.model("User", userSchema)