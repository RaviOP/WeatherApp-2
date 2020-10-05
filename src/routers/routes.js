const express = require('express');
const router = express.Router()
const Weather = require('../utils/forecast')

router.get('',(req,res)=>{
    res.send('index')
})

router.get('/weather',(req,res)=>{
    if (!req.query.address){
        return res.send({
            Error: "You Must Provide an Address"
        })
    }
    Weather(req.query.address,(error,data)=>{
        if (error){
            return res.send({
                Error: error
            })
        }
        res.send(data)
    })
})
router.get('*',(req,res)=>{
    res.send('Page Not Found')
})

module.exports = router