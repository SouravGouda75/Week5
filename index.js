const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/route')
const { add } = require('./controllers/controls')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(express.static(__dirname + '/views'));
try {
     mongoose.connect('mongodb://localhost:27017/')
    console.log('MongoDB Connected !!');
} catch (error) {
    
}

app.get('/home',(req,res)=>{
    res.render('index',{title : 'CRUD APPLICATION'})
})

app.use('/form', (req,res)=>{
    
    res.render('form',{title:"CRUD Register"})
})
app.use('/',router)
app.listen(80,()=>{console.log('Server listening on port:80')}) 