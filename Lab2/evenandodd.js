var a=(function(){
    console.log('start');
    
    for(let i=1;i<=8;i++){
        if(i%2==0){
            setTimeout(function even(){
                console.log(i);
            })    
        } 
    }

    for(let i=1;i<=8;i++){
        if(i%2!=0){
            setTimeout(function odd(){
                console.log(i);
            })    
        } 
    }

    process.nextTick(function(){
        console.log('end');
    })
})
a();

