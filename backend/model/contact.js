const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
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