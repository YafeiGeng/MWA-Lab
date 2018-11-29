var dns = require("dns")

var http=dns.resolve4("www.mum.edu",(error,addresses)=>{console.error(error),console.log(addresses);});