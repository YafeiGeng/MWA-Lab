const {of} = rxjs;
const {map}=rxjs.operators;
let string="This house is nice!";
of(string)
    .pipe(
        map((string)=>string.replace("house","*****").replace("nice","****"))
    )
    .subscribe(
        (string)=>console.log(string)
    )