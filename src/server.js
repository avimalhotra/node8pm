require('dotenv').config();
const path=require('path');
const express=require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const parseurl=require('parseurl');


const app=express();

// trust first proxy
app.set('trust proxy', 1); 
app.use(session({
    secret:"session",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false,maxAge:3000}
}));


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

app.use(express.static(path.resolve('src/public')));

app.use((req,res,next)=>{
    //console.log(`login at ${Date.now()}`);
    if (!req.session.views) {
        req.session.views = {};
      }
    
      // get the url pathname
      var pathname = parseurl(req).pathname;
    
      // count the views
      req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();
});

app.get('/',(req,res)=>{
    //res.send(req.url);
    //res.send(req.sessionID);
    res.send( "Page Views : " +req.session.views['/']+ " times");
});
app.get('/setcookie',(req,res)=>{
    res.cookie("login",Date.now(),{maxAge:86400});
    res.send("cookie saved");
}); 
app.get('/getcookie',(req,res)=>{
    
    //res.send(req.cookies);
    if( req.cookies.login ){
        res.send(new Date(+req.cookies.login));
    }
    else{
        res.send("please login again")
    }
}); 


app.get('/app',(req,res)=>{
    res.redirect('/app.html');
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

    let data=req.body;
    let username=data.name;
    let password=data.pass;

    res.send(`Hello ${username}`);
});

app.get('/search',(req,res)=>{
    res.status(200).send(`you have searched  <b> ${req.query.q} </b>`);
});

app.get('/cars/:brand/:car/:variant',(req,res)=>{
    res.status(200).send(req.params);
});


// route 
const product=require('./routes/product');
const users=require('./routes/users');
const admin=require('./routes/admin');
app.use("/product",product);
app.use("/users",users);
app.use("/admin",admin);


// api
const cars=[{"name": "swift","type": "hatchback","price":800000},
            {"name": "ciaz","type": "sedan","price":1000000},
            {"name": "baleno","type": "hatchback","price":850000},
            {"name": "scross","type": "crossover","price":11500000},
            {"name": "brezza","type": "suv","price":990000},
            {"name": "gypsy","type": "suv","price":750000}
        ];

app.get("/api",(req,res)=>{
    res.header('Access-Control-Allow-Origin',"*");
    return res.status(200).send(cars);
});




/* Wildcard Handler */ 
app.get('/**',(req,res)=>{
    res.status(404).send("404, Page not found")
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${process.env.PORT}`);
})
