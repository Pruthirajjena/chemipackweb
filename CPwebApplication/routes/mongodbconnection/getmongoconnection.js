const{MongoClient} = require("mongodb");
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);


var mongdbRef = {
    getmongodbref(data, type, dbcollection) {
        return getdbconnection(data, type, dbcollection);
    }
};
async function getdbconnection(userdata, operationType, dbcollection) {
    // Use connect method to connect to the server
    await mongoClient.connect();
    console.log('Connected successfully to server');
    const db = mongoClient.db("Chemipack");
    const collection = db.collection(dbcollection);
  
    if(operationType == 'find'){
        return collection.find({accountID : userdata.accountID}).toArray();
    } else if (operationType == 'insert' ){
        return collection.insertOne(userdata);
    } else if (operationType == 'findproduct'){
        var userfilter = userdata;
        var queryObj = {};
        if(userfilter.filterlist && userfilter.filterlist.length){
            queryObj.category={$in: userfilter.filterlist};
        }
        if(userfilter.price ){
            queryObj.price={$gt: 100, $lt: parseInt(userfilter.price)};
        }
        console.log(queryObj)
        return collection.find(queryObj).toArray();

    } else if (operationType == 'addproduct'){
        return collection.insertOne(userdata);
    }

}
// accountID : userdata.accountID

module.exports = mongdbRef;