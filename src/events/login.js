let t=require('../main');

t.on("log",(res)=>{
    console.log("Login process starts at",res)
});
t.on("log",()=>{
    console.log("login process done");
});
