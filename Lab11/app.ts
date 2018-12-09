class university{
    name:string;
    dept:string;

    constructor(name:string,dept:string){
        this.name=name;
        this.dept=dept;
    }

    graduation(year:number) {
        console.log('Graduating'+this.dept+ year + 'student');
    }
}

let mum=new university("MUM","Computer Science");

mum.graduation(2019);