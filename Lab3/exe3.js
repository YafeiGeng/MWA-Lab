var EventEmitter=require('events');

class Gym extends EventEmitter{
    constructor(){
        super();
    }

    visit(){
        this.emit('go',setInterval(function() {setTimeout(function(){
            console.log('Athlete is working out')
        })},1000))
    }
}

var gym=new Gym();
gym.on('go',function(){
    console.log("Athlete is working out");
});

gym.visit();