const { isUtf8 } = require("buffer");
const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);
// fs.writeFileSync("./tst.txt","new file created"); // synchronous
// fs.writeFile("./tst2.txt","new file created again",(err)=>{}); // asynchronous
// // const result = fs.readFileSync("./testing.txt","utf-8");
// // console.log(result);
// // synch call always return something & doesn't want callback function unlike asynchronous calls
// fs.readFile("./testing.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("an error occurred");
//     }
//     else console.log(result);
// })
