var os=require('os');                  // build-in module


//console.log(os.cpus().length);
//console.log(os.cpus());


// os.cpus().forEach(function(i){console.log(i); })

//console.log(os.totalmem()/(1024*1024*1024), os.freemem()/(1024*1024*1024));


//  console.log(os.networkInterfaces());

//console.log(os.platform())

console.log(`system is up since ${(os.uptime()/3600)} hours`);
console.log(os.userInfo());