const http=require('http');
const fs=require('fs');
const path=require('path');
const dotenv=require("dotenv").config();

let data=["jan","feb","mar","apr"];

const server=http.createServer((req,res)=>{
    if( req.url=="/app" && req.method=="GET"){
         //res.write("hello http");
        //res.write(req.url);
        //res.write(req.method);
        //res.write(req.headers.host);

        //res.statusCode=200;
        //res.setHeader('Content-Type','text/html');
        res.writeHead(200,{'Content-Type':'text/html'});

        res.write("<h1>Hello HTTP</h1>");
        res.write("<ol>");
        data.forEach((i)=>{
            res.write("<li>"+ i+ "</li>");
        })
        res.write("</ol>");
        res.end();
    }
    else if(req.url=="/" && req.method=="GET"){
        fs.readFile('src/public/index.html',(err,data)=>{
            if(err){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(err.toString());
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
        });
    }
    else{
        res.statusCode=404;
        res.end("404, Page not found");
    }
});

server.listen(process.env.PORT,()=>{
    console.log(`Server running at http://127.0.0.1:${process.env.PORT}`)
}); 