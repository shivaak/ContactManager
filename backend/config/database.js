const mongoose = require('mongoose')

const connectDb = async ()=>{
    try {
        const c = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`Database connected to host name ${c.connection.host}, DB name : ${c.connection.name} `)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb