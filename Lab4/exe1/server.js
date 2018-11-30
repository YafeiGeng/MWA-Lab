const http=require('http');
const{fork}=require('child_process');
const server=http.createServer();

server.on('request',(req,res)=>{
    const childProcess=fork('parse.js');
    childProcess.send('start');
    childProcess.on('message',URL =>
    res.end(URL))
});

server.listen(3000,'127.0.0.1');