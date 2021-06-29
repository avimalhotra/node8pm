const event=require('events').EventEmitter;

let emitter=new event();

module.exports=emitter;

emitter.on("done",(res,a)=>{
    console.log(`event 1 done by ${res}`);
    a.handled=true;
});
emitter.on("done",(res,b)=>{
  if( b.handled==false ){
    console.log(`event 2 done by ${res}`);
  }
});
emitter.once("expire",()=>{
  console.log("Account suspended");
});


//emitter.emit("done",'Avi',{handled:false});
//emitter.emit("done",'Isha');
//emitter.emit('expire');

let login=require('./events/login');
let account=require('./events/account');

emitter.emit('log','10am');
emitter.emit('acc');
