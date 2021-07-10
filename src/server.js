require('dotenv').config();
const path=require('path');
const express=require('express');

const app=express();
app.use(express.static(path.resolve('src/public')));

app.use((req,res,next)=>{
    console.log(`login at ${Date.now()} `);
    next();
});


app.get('/',(req,res)=>{
    res.send("hello express");
});
app.get('/login',(req,res)=>{
    res.send("please login");
});
app.get('/getdata',(req,res)=>{

    let name=req.query.name;
    let age=req.query.age;
    

    //res.send(req.query);
    res.json({data:req.query});
});
app.post('/postdata',(req,res)=>{
    res.send("data posted");
});


/* Wildcard Handler */ 
app.get('/**',(req,res)=>{
    res.status(404).send("404, Page not found")
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${process.env.PORT}`);
})
