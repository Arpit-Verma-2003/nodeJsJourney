const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req,res)=>{
    // console.log(req.headers);
    const log = `${Date.now()},${req.url}:new request recieved\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/': res.end("You are at Home Page");
            break;
            case '/about': res.end("Well I am a Student");
            break;
            case '/contact': res.end("Contact - abc@gmail.com");
            break;
            default: res.end("Oops Not Found");
        }
    })
});

myServer.listen(8085,()=>console.log("server is started here"));