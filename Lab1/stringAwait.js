var string="The house is nice!";
var changeString=function(){
    string=string.replace("house","*****").replace("nice","****");
    console.log(string);
}

async function filterWords(){
    try{
        let results=await changeString();
        console.log(results);
    } catch(error){
        console.log(error)
    }
}
filterWords();
