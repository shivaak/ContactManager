const express = require('express')
const errorHandler = require('./middleware/errorhandler')
const connectDb = require('./config/database')
const dotenv = require('dotenv').config()

connectDb()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/contact", require('./router/cmrouter'))

//Always shoule be in last
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, ()=> {
    console.log(`Server started at port ${port}...`)
})