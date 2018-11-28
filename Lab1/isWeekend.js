function isWeekend(){
    const todayDate=new Date();
    const day=todayDate.getDay();
    
    //console.log((day==0 || day ==6)? "weekend":"weekday");
    const weekenfOrWeekday=() =>{
        return weekenfOrWeekday.labels[day] ||
        weekenfOrWeekday.labels['default'];
    };

    weekenfOrWeekday.labels={
        0:'weekend',
        6:'weekend',
        default:'weekday'
    };
    console.log(weekenfOrWeekday(todayDate));
}
isWeekend();