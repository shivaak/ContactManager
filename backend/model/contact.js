const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name : {
        type: String,
        required: [true, "Contact name is mandatory"]
    },
    email : {
        type: String,
        required: [true, "Email is mandatory"]
    },
    phone : {
        type: String,
        required: [true, "Phone is mandatory"]
    }, 
},
{
    timestamps:true
}
)

module.exports = mongoose.model("Contact", contactSchema)