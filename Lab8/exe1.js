//1:display all the documents in the collection restaurants
db.restaurantsCol.find().pretty()

//2:display the field restaurant_id,name,distric tand cuisine
db.restaurantsCol.find({},{restaurantsCol_id:1,name:1,district:1,cuisine:1}).pretty()

//3:display the field restaurant_id,name,district and cuisine,but exclude _id
db.restaurantsCol.find({},{_id:0,name:1,district:1,cuisine:1}).pretty()

//4:display the field restaurant_id,name,district and zipcode,but exclude _id
db.restaurantsCol.find({},{_id:0,name:1,district:1,"address.zipcode":1}).pretty()

//5:display all the restaurant which is in the district Bronx
db.restaurantsCol.find({district:"Bronx"}).pretty()

//6:display the first 5 restaurant which is in the district Bronx
db.restaurantsCol.find({district:"Bronx"}).limit(5).pretty()

//7:display the next 5 restaurant after skipping first 5 which are in the district Bronx
db.restaurantsCol.find({district:"Bronx"}).skip(5).limit(5).pretty()

//8:locates in coord value less than -95.754168
db.restaurantsCol.find({"address.coord":{$lt:-95.754168}}).pretty()

//9:locates in coord value less than -65.754168
db.restaurantsCol.find({"address.coord":{$lt:-65.754168}}).pretty()

//10:find the restaurant Id,name,district and cuisine which contains 'Wil' as first three letters for its name
db.restaurantsCol.find({name:{$regex:'^Wil'}},{_id:1,name:1,district:1,cuisine:1}).pretty()

//11:find the restaurant Id,name,district and cuisine which contains 'ces' as first three letters for its name
db.restaurantsCol.find({name:{$regex:'ces'}},{_id:1,name:1,district:1,cuisine:1}).pretty()

//12:find the restaurant Id,name,district and cuisine which contains 'Reg' as first three letters for its name
db.restaurantsCol.find({name:{$regex:'Reg'}},{_id:1,name:1,district:1,cuisine:1}).pretty()

//13:restaurants which belongs to the district ronx and prepared either American or Chinese dish
db.restaurantsCol.find({$and:[{district:"Bronx"},{cuisine:{$in:["American","Chinese"]}}]}).pretty()

//14:display the field restaurant_id,name,district and cuisine which elong to the district Staten Isand or Queens or Bronx or rooklyn 
db.restaurantsCol.find({'district':{$in:['Staten Island','Queens','Bronx','Brooklyn']}},{_id:1,name:1,district:1,cuisine:1}).pretty()

//15:display the field restaurant_id,name,district and cuisine which not belong to the district Staten Isand or Queens or Bronx or Brooklyn 
 db.restaurantsCol.find({'district':{$nin:['Staten Island','Queens','Bronx','Brooklyn']}},{_id:1,name:1,district:1,cuisine:1}).pretty()

//16:display the field restaurant_id,name,district and cuisin for those restaurants which achieved a score which is not more then 10
db.restaurantsCol.find({'grades':{$elemMatch:{'score':{$lte:10}}}},{_id:1,name:1,district:1,cuisine:1}).pretty()

//17:display the restaurant Id,name,address and geographical location for those restaurants where 2nd element of coord array contains a value which is more then 42 and up to 52.
db.restaurantsCol.find({'address.coord.1':{$gt:42,$lte:52}},{_id:1,name:1,address:1,coord:1}).pretty()

//18:arrange the name of the restaurants in ascending order along with all the columns
db.restaurantsCol.find().sort({name:1}).pretty()

//19:arrange the name of the restaurants in descending order along with all the columns
db.restaurantsCol.find().sort({name:-1}).pretty()

//20:arrange the name of the cuisine in ascending order and for those same cuisine district should e in descending order
db.restaurantsCol.find().sort({cuisine:1,district:-1}).pretty()

//21:the addresses contains the street
db.restaurantsCol.find({'address.street':{$exists:true}}).pretty()

//22:coord field value is Doule
db.restaurantsCol.find({'address.coord':{$type:"double"}}).pretty()

//23:find the restaurant name,district,longitude and latitude and cuisine for those restaurants which contains "Mad" as first three letters of its name
db.restaurantsCol.find({name:{$regex:'^Mad'}},{_id:0,name:1,district:1,"address.coord":1,cuisine:1}).pretty()

