const fs=require('fs');

//var fileDate=fs.readFileSync('src/main.txt');

//console.log(fileDate);                  // buffer
//console.log(fileDate.toString());                  // 

/* fs.readFile('src/main.txt',{encoding:'utf-8'},(err,data)=>{
    if( err){
        console.error(err);
    }
    else{
        console.log( data);
    }
}); */
/* fs.stat('src/main.txt', (err, stats) => {
    if (err) {
      console.error(err)
    }
    else{
        console.log(stats.isFile());      // true
        console.log(stats.isDirectory());      // false
        console.log(stats.size);      // 1024
    }
  }); */

 /*  fs.appendFile('src/main.txt',"Hello Node\n",'utf8',(err)=>{
    if(err){
        console.log(err)
    }
    }) */

    fs.unlink('src/main.txt',(err)=>{
        (err)? console.error(`Error found: ${err}`) : console.log("file deleted");
    });

console.log("done");
