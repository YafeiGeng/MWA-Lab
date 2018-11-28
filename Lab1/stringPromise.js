
var isTrue=true;
var string="this house is nice!";

var filterWords=function(){
    
    return new Promise(function(resolve,reject){
     
        if(isTrue){
            resolve(   
                string=string.replace("house","*****").replace("nice","****"),              
            );
        }else{
            reject("This is false");
        }
    })
}

filterWords()
        .then(string => console.log(string))
        .catch(err => console.log(err));
