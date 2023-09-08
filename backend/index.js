const express = require('express')
const errorHandler = require('./middleware/errorhandler')
const connectDb = require('./config/database')
const dotenv = require('dotenv').config()

connectDb()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", require('./router/homerouter'))
app.use("/api/contact", require('./router/cmrouter'))
app.use("/api/user", require('./router/userrouter'))


//Always shoule be in last
app.use(errorHandler)

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log(`Server started at port ${port}...`)
})