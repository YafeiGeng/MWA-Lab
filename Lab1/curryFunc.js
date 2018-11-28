const item={
    "name":"iscuits",
    "type":"regular",
    "category":"food",
    "price":200
}

function applyCoupon(item){
    var discount=0.1;
    var price=item.price*(1-discount);
    console.log(price);
    
}
applyCoupon(item);