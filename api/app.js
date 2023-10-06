const express= require('express'),
app=express(),
fs=require('fs'),
path=require('path'),
data=require('./data');

app.listen(8080,()=>{
 
})
console.log(data.people)
app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.json(data.people);
    res.send('hello')

})
app.all('*',(req,res)=>{
    res.status(404).send('<h1> Resource not found </h1>');
})

