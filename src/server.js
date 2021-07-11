require('dotenv').config();
const path=require('path');
const express=require('express');

const app=express();
app.use(express.static(path.resolve('src/public')));

app.use((req,res,next)=>{
    console.log(`login at ${Date.now()}`);
    next();
});

app.get('/',(req,res)=>{
    //res.send(req.url);
    res.send(req.query);
});

app.get('/app',(req,res)=>{
    res.redirect('/app.html')
});
app.get('/login',(req,res)=>{
    res.send("please login");
});
app.get('/getdata',(req,res)=>{

    let name=req.query.name;
    let age=req.query.age;

    res.status(200).send(req.query);
    //res.json({data:req.query});
});
app.post('/postdata',(req,res)=>{
    res.send("data posted");
});

app.get('/search',(req,res)=>{
    res.status(200).send(`you have searched  <b> ${req.query.q} </b>`);
});

app.get('/cars/:brand/:car/:variant',(req,res)=>{
    res.status(200).send(req.params);
});

/* Wildcard Handler */ 
app.get('/**',(req,res)=>{
    res.status(404).send("404, Page not found")
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${process.env.PORT}`);
})
