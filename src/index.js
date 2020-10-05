const express = require('express');
const weatherRoute = require('./routers/routes')

const app = express()
const Port = process.env.PORT

app.use(express.static('public'))
app.use(weatherRoute)

app.listen(Port,()=>{
    console.log(`Server is Started on Port ${Port} on ${process.env.NODE_ENV} mode.`)
})

