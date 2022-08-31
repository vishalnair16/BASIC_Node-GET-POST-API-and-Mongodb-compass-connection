const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const routes = require('./routes/routes')


const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection



const app = express()
app.use('/uploads',express.static('uploads'))

database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log("Database Connected")
})


app.use(express.json());
app.use('/api',routes)

app.listen(3000,()=>{
    console.log("PORT RUNNING ON 3000")
})