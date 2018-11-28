function filterwords(){
    var string="this house is nice!";
    string=string.replace("house","*****").replace("nice","****");
    console.log(string);
}
filterwords();