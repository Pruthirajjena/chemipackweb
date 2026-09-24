
var express = require("express");
var router = express.Router();

const{MongoClient} = require("mongodb");
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);

router.post('/', (req, res, next)=>{
    console.log("Data receved form user");
    console.log(req.body);
    var feedbackdetails = req.body;

    mongodbconnect(feedbackdetails).then((result)=>{
        // responseOBJ.msg = "Success";
        res.send(JSON.stringify(feedbackdetails))
        // console.log('DB result', result)
    })
    

});
async function mongodbconnect(feedbackdetails) {
  // Use connect method to connect to the server
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("Chemipack");
  const collection = db.collection("feedback");
    
  // the following code examples can be pasted here...
   return collection.insertOne(feedbackdetails);
  
}
module.exports = router;