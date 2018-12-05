1. db.zipsCol.aggregate([{
    $match: {
        state: "IA"
    }

}, {
    $project: {
        _id: 0,
        "zipcodes": "$_id"
    }
}])

2. db.zipsCol.aggregate([{
    $match: {
        pop: {
            $gt: 1000
        }
    }
},{
    $project: {
        _id: 0,
        "zipcodes": "$_id"
    }
}])

3. db.zipsCol.aggregate([
    {
        $group:{
            _id:{
                'city':'$city',
                'state':'$state'
            },
            num:{$sum:1}
        }
    },{
            $match:{
                num:{
                    $gt:1
                }
            }
        },{
            $project:{
                _id:0,
                'city':'$_id.city'
            }
        },{
            $sort:{
                city:1,
                state:1
            }
        }  
])

4.db.zipsCol.aggregate([
    {
        $group:{
            _id:{
                state:'$state',
                city:'$city'
            },
            population:{$sum:'$pop'},
        }
    },{
        $sort:{
            '_id.state':1,
            'population':-1
        }
            
    },{
        $group:{
            _id:'$_id.state',
            population:{$first:'$population'}
        }
    },{
        $sort:{
            '_id':1
        }
    }
    
])