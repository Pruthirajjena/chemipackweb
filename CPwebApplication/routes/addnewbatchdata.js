var express = require("express");
var router = express.Router();

const{MongoClient} = require("mongodb");
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);

router.post('/', (req, res, next)=>{
    console.log("Data receved form user");
    console.log(req.body);
    var batchdetails = req.body;

    mongodbconnect(batchdetails).then((result)=>{
        // responseOBJ.msg = "Success";
        res.send(JSON.stringify(batchdetails))
        // console.log('DB result', result)
    })
    

});
async function mongodbconnect(batchdetails) {
  // Use connect method to connect to the server
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("Chemipack");
  const collection = db.collection("Batchdatadb");
    
  // the following code examples can be pasted here...
   return collection.insertOne(batchdetails);
  
}
module.exports = router;