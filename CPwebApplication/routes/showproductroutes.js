var express = require("express");
var router = express.Router();

const{MongoClient} = require("mongodb");
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);

router.post('/', (req, res, next)=>{
    console.log("Data receved form user");
    console.log(req.body);
    var showprod = {};

    mongodbconnect(showprod).then((response)=>{
        // responseOBJ.msg = "Success";
        res.send(JSON.stringify(showprod))
        console.log('DB result', result)
    })
    

});
async function mongodbconnect() {
  // Use connect method to connect to the server
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("Chemipack");
  const collection = db.collection("CPproduct");
    
  // the following code examples can be pasted here...
   return collection.find().toArray();
  
}
module.exports = router;