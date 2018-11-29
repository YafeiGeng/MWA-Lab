var dns = require("dns");
const {promisify} = require('util');

const myPromise=promisify(dns.resolve4);

myPromise('www.mum.edu')
    .then(addresses=>{console.log(addresses);})
    .catch(err=>console.error(err));

        