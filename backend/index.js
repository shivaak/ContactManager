const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/contact", require('./router/cmrouter'))

const port = process.env.PORT || 5000
app.listen(port, ()=> {
    console.log(`Server started at port ${port}...`)
})