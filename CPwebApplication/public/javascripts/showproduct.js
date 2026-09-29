
// var producttemplate;
// document.addEventListener(("DOMContentLoaded"), () => {
//     producttemplate = Handlebars.compile($("#single_product_template").html());
// });
// var showproduct =()=>{
//     $("#bodymain").empty();
//     $("#bodymain").load("HTM/producttemplet.htm");
// }
// var showallproduct = ()=>{
var producttemplate;

var showproduct = () => {
    $("#bodymain").empty();
    $("#bodymain").load("HTM/producttemplet.htm", function () {
        // Compile after the template HTML has loaded into the DOM
        producttemplate = Handlebars.compile($("#single_product_template").html());
    });
};

getshowaprodURL= '/show/product/onpage'
    axios.post(getshowaprodURL).then((response)=>{
         $(".pdetailblock").html('');
        console.log(response.data);
        var productDeatals= response.data.details;
        productDeatals.forEach(details => {
            
            details.Pname=details.Pname;
            details.Pcode = details.Pcode;
            details.catagory = details.catagory;
            $(".pdetailblock").append(producttemplate(details));
        });

        
    }).catch((err)=>{

})


// }