
   
   require('./test');                     // custom module

   var os=require('os');                  // build-in module
   require('dotenv').config();

   const pi=3.14;
   

 //   console.log(`value of pi is ${pi}`);

 //console.log("pi is %s",pi)

 //console.log(__filename);
 //console.log(__dirname);

 //console.log( console===global.console);
 //console.log( setInterval===global.setInterval);


 //console.log(process.versions);
// console.log(process.memoryUsage());


//console.log(x, y);
//console.log(os.cpus().length);
//console.log(os.totalmem()/(1024*1024*1024), os.freemem()/(1024*1024*1024));

console.log(process.env.APP);
console.log(`App running on ${process.env.PORT}`);
