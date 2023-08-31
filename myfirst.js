var http=require('http')
var dateTime=require('./ownModule')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("This is first nodejs file"+dateTime.myDateTimeModule())
}).listen(8000)