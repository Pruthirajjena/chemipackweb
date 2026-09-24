var express = require("express");
var router = express.Router();

const{MongoClient} = require("mongodb");
const dburl = 'mongodb://localhost:27017';
const mongoClient = new MongoClient(dburl);
var bcrypt = require("bcrypt");

router.post('/', (req, res, next)=>{
    console.log("Data receved form user");
    console.log(req.body);
    var responseOBJ = {}; 
    var executivesignupdata = req.body; 
    executivesignupdata.exepassword = bcrypt.hashSync(executivesignupdata.exepassword, 5);

    mongodbconnect(executivesignupdata).then((result)=>{
        responseOBJ.msg = "Success";
        res.send(JSON.stringify(responseOBJ))
        console.log('DB result', result)
    })
    

});
async function mongodbconnect(executivesignupdata) {
  // Use connect method to connect to the server
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("Chemipack");
  const collection = db.collection("executiveuserdb");
    
  // the following code examples can be pasted here...
   return collection.insertOne(executivesignupdata);
  
}
module.exports = router;