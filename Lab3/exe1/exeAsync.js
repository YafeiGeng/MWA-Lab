var dns = require("dns");
const {promisify} = require('util');

const myPromise=promisify(dns.resolve4);

async function tohttp(){
    try{
        var result=await myPromise('www.mum.edu');
        console.log(result);
    }catch(error){
        console.log(error);
    }
};

tohttp();