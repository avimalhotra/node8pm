const dns=require('dns');

dns.resolve('techaltum.com',(err,add)=>{
    (err)?console.error(err):console.log(add);
});