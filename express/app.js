const express= require('express'),
app=express(),
fs=require('fs'),
path=require('path');

app.listen(8080,()=>{
 
})
app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./pages/index.html'))
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1> Resource not found </h1>');
})

