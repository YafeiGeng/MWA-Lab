var http=require('http');
var server=http.createServer()

server.on("request",function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("Hello World");
        res.end();
}).listen(4000,'127.0.0.1');