const http = require("http");
const myServer = http.createServer((req,res)=>{
    console.log("new req rec");
    console.log(req.headers);
    res.end("Hello from the Server");
});

myServer.listen(8085,()=>console.log("server is started here"));