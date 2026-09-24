var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './public/images/productimage')
    },
    filename: function (req, file, callback) {
        file_path = "prodImage-" + Date.now() + path.extname(file.originalname);
      callback(null, file_path)
    }
});
const upload = multer({ storage: storage }).single('productimages');
router.post('/',(req,res,next)=>{

    var responseOBJ = {};
    
    upload(req,res, function(err){
        if(err){
            responseOBJ.msg= "Error"
            console.log(err);
        }else{
            responseOBJ.file_path = "\\images\\productimage\\"+file_path;
            responseOBJ.msg = "success"
        }
        res.send(JSON.stringify(responseOBJ));
    })

})

module.exports = router;