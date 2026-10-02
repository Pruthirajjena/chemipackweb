var express = require("express");
var router = express.Router();

const{MongoClient} = require("mongodb");
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);

router.post('/', (req, res, next)=>{
    console.log("Data receved form user");
    console.log(req.body);
    var dalyProductiondata = req.body;

    mongodbconnect(dalyProductiondata).then((result)=>{
        // responseOBJ.msg = "Success";
        res.send(JSON.stringify(dalyProductiondata))
        // console.log('DB result', result)
    })
    

});
async function mongodbconnect(dalyProductiondata) {
  // Use connect method to connect to the server
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("Chemipack");
  const collection = db.collection("dalyproductiondb");
    
  // the following code examples can be pasted here...
   return collection.insertOne(dalyProductiondata);
  
}
module.exports = router;