var express = require("express");
var router = express.Router();

var mongoDBRef = require("../routes/mongodbconnection/getmongoconnection.js");
var bcrypt = require("bcrypt");

// const{MongoClient} = require("mongodb");
// const dburl = 'mongodb://localhost:27017';
// const mongoClient = new MongoClient(dburl);

router.post('/', (req, res, next)=>{
    console.log("Data receved form user");
    console.log(req.body);
    var responseOBJ = {}; 
    var userdata = req.body; 
    
    // console.log(req.session);    
    mongoDBRef.getmongodbref(userdata, 'find', 'adminuserdb').then((response)=>{       
        console.log("DB response")
        console.log(response) 
              
        if(response && response[0]){
            if(bcrypt.compareSync(req.body.password, response[0].password)){
                responseOBJ.msg = "valid details";
                // req.session.isLoggedinUser = true ; 
            }else{
                responseOBJ.msg = "Invalid details";
                // req.session.isLoggedinUser = false ;
            }
            res.send(JSON.stringify(responseOBJ));
        }
        // if(!response.length){
        //     responseOBJ.msg = "Invalid details";
        // }else{
        //     responseOBJ.msg = "valid details";
        // }               
        
    }) 

});
module.exports = router;