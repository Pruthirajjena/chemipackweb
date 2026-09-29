var express = require("express");
var router = express.Router();

const{MongoClient} = require("mongodb");
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);
var products = { details:[] };
router.post('/', (req, res, next)=>{
    console.log("Data receved form user");
    console.log(req.body);
    var showprod = {};

    mongodbconnect(showprod).then((response)=>{
        // showprod.msg = "Success";
        products.details = response;
        res.send(JSON.stringify(products))
        console.log('DB result', response)
    })
    

});
async function mongodbconnect(showprod) {
  // Use connect method to connect to the server
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("Chemipack");
  const collection = db.collection("CPproduct");
    
  // the following code examples can be pasted here...
   return collection.find().toArray();
  
}
module.exports = router;