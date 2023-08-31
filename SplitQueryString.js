var http=require('http')
var url=require('url')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
   console.log(req.url)
    var q=url.parse(req.url,true).query;
    console.log(url.parse(req.url,true))
    console.log(q)
   var txt=q.year+" "+q.month;
   res.end(txt)
}).listen(8090)