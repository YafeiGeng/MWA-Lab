const {Subject}=require('rxjs')
const memoryEnough=true;
const core=true;

const subject =new Subject();


function checkSystem(){
    console.log('Checking you System')

    if(!memoryEnough){
        subject.subscribe('This app needs at least 4 GB of RAM');
    } else if(!core){
        subject.subscribe('Processor is not supported');
    }else{
        subject.subscribe('System is checked successfully');
    }

}

checkSystem();