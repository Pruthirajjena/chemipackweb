

var addproductdiv = ()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/addproduct.htm");
}
var productdetails ={};
var addnewproduct =() =>{
    
    productdetails.Pname = $("#product_name").val();
    productdetails.Pcode = $("#product_code").val();
    productdetails.catagory= $("#P_category").val();

    console.log(productdetails)

    var getpURL = '/add/product/details';

    axios.post(getpURL,productdetails).then((result)=>{

    }).catch((err)=>{

    })

}
// console.log(productdetails);


var uploadimage = ()=>{
    var fileupload = $("input[name=productimages]")[0].files[0];
    if(fileupload.type == 'image/jpeg' || fileupload.type == 'image/png' || fileupload.type == 'image/jfif'){
        $("#uploadmsg").show();
        $("#uploadmsg2").hide();

        let formdata = new FormData();
        formdata.append("productimages",fileupload)
        axios.post('/prduct/image/upload', formdata,{
            headers:{
                "Content-Type":"multipart/form-data",
            }
        }).then((response)=>{
            console.log(response.data);
            productdetails.image = response.data.file_path;
            if(response.data.msg == "success"){
                // $("#uploadmsg").text("your file has been successfully uploaded.")
                // $("#uploadmsg2").hide();
            }else{
                
            }
        });
       
    }else{
        // $("#warningmsg").show();
        // $("#successmsg").hide();
        $("#uploadmsg").hide();
        $("#uploadmsg2").show();
    }
    // console.log(fileupload);
    console.log(productdetails);

}