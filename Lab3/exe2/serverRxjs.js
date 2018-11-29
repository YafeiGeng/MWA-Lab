const{ Subject}=require('rxjs');

const subject =new Subject();

function sendHello(reqres){
    reqres.res.end("Hello World");
}

subject.subscribe(sendHello);

const http= require('http');
http.createServer((req,res)=>{
    subject.next({req:req,res:res});
}).listen(4001,'127.0.0.1');