var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    fs.readFile('file1.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8007)