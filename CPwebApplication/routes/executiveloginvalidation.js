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
    var executivelogindata = req.body;     

    mongodbconnect(executivelogindata).then((response)=>{
        responseOBJ.msg = "Success";
        // res.send(JSON.stringify(responseOBJ))
        console.log(responseOBJ) 
        console.log('DB response =>',response)
        const user = response[0];
        console.log(executivelogindata)
        console.log("Stored hash:", response[0].exepassword);
        if(response && response[0]){
            if(bcrypt.compareSync(executivelogindata.password, response[0].exepassword)){
                responseOBJ.msg1 = "valid details";
                // req.session.isLoggedinUser = true ;
                console.log(responseOBJ.msg1);
            }else{
                responseOBJ.msg1 = "Invalid details";
                 // req.session.isLoggedinUser = false ;
                 console.log(responseOBJ.msg1);
            }
                res.send(JSON.stringify(responseOBJ));
        }
       
        
    })
});
async function mongodbconnect(executivelogindata) {
  // Use connect method to connect to the server
  await mongoClient.connect();
  console.log('Connected successfully to server');
  const db = mongoClient.db("Chemipack");
  const collection = db.collection("executiveuserdb");
   return collection.find({exeuserid : executivelogindata.userid}).toArray();
  
}
module.exports = router;