
const url=require('url');
let urlString='http://localhost:4000/?url=path/to/my/file.txt';
const fs=require('fs');
const parseURL=()=>{

    return url.parse(urlString,true);
    
}

process.on('message',(msg)=>{
    
    const URL=parseURL();        
        process.send(URL);    
})


