
var producttemplate;

var showproduct = () => {
    $("#bodymain").empty();
    // $("#bodymain").load("HTM/producttemplat.htm");
    $("#bodymain").load("HTM/producttemplat.htm", function () {
        // Compile after the template HTML has loaded into the DOM
        producttemplate = Handlebars.compile($("#single_product_template").html());
    });
    

 getshowaprodURL= '/show/product/onpage'
    axios.post(getshowaprodURL).then((response)=>{
         $(".pdetailblock").html('');
        console.log(response.data);
        var productDeatals= response.data.details;
        productDeatals.forEach(details => {
           
            $(".pdetailblock").append(producttemplate(details));
        });

        
    }).catch((err)=>{

})

};

// }8888888888888888888888888888888888888888888888888888888888888888888888888888