var WHwindo =()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/warehouseIN.htm");
}

var showinputbox = ()=>{
    
    // $(".btndiv-A").css("display", "none");

    var a = $("#WHIN-P_category").val();

    if (a === "HDPE"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-resin-div").css("display", "block");
        $("#WHIN-packquantity-div").css("display", "block");
        $("#WHIN-quantityperpack-div").css("display", "block");

        $("#WHIN-lable-div").css("display", "none");
        $("#WHIN-colorant-div").css("display", "none");
        $("#WHIN-bucket-div").css("display", "none");

        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");

        $("#WHIN-venderanme-div").css("display", "block");
        $("#WHIN-venderaddress-div").css("display", "block");
        $("#WHIN-Manufacturer-div").css("display", "block");
        $("#WHIN-Manufactureraddress-div").css("display", "block");

        $(".btndiv").css("display", "block");
    } else if ( a === "Colorant"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-colorant-div").css("display", "block");
        $("#WHIN-packquantity-div").css("display", "block");
        $("#WHIN-quantityperpack-div").css("display", "block");

        $("#WHIN-lable-div").css("display", "none");
        $("#WHIN-resin-div").css("display", "none");
        $("#WHIN-bucket-div").css("display", "none");

        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");
        $(".btndiv").css("display", "block");
        $("#WHIN-venderanme-div").css("display", "block");
         $("#WHIN-venderaddress-div").css("display", "block");
         $("#WHIN-Manufacturer-div").css("display", "block");
         $("#WHIN-Manufactureraddress-div").css("display", "block");
    }else if ( a === "PP"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-resin-div").css("display", "block");
        $("#WHIN-packquantity-div").css("display", "block");
        $("#WHIN-quantityperpack-div").css("display", "block");

        $("#WHIN-colorant-div").css("display", "none");
        $("#WHIN-lable-div").css("display", "none");
        $("#WHIN-bucket-div").css("display", "none");

        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");
        $(".btndiv").css("display", "block");
        $("#WHIN-venderanme-div").css("display", "block");
         $("#WHIN-venderaddress-div").css("display", "block");
         $("#WHIN-Manufacturer-div").css("display", "block");
         $("#WHIN-Manufactureraddress-div").css("display", "block");
    }else if ( a === "LDPE"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-resin-div").css("display", "block");
        $("#WHIN-packquantity-div").css("display", "block");
        $("#WHIN-quantityperpack-div").css("display", "block");

        $("#WHIN-lable-div").css("display", "none");
        $("#WHIN-colorant-div").css("display", "none");
        $("#WHIN-bucket-div").css("display", "none");

        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");
        $(".btndiv").css("display", "block");
        $("#WHIN-venderanme-div").css("display", "block");
         $("#WHIN-venderaddress-div").css("display", "block");
         $("#WHIN-Manufacturer-div").css("display", "block");
         $("#WHIN-Manufactureraddress-div").css("display", "block");
    }else if ( a === "PET"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-resin-div").css("display", "block");
        $("#WHIN-packquantity-div").css("display", "block");
        $("#WHIN-quantityperpack-div").css("display", "block");
        
        $("#WHIN-bucket-div").css("display", "none");
        $("#WHIN-colorant-div").css("display", "none");
        $("#WHIN-lable-div").css("display", "none");

        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");
        $(".btndiv").css("display", "block");
        $("#WHIN-venderanme-div").css("display", "block");
         $("#WHIN-venderaddress-div").css("display", "block");
         $("#WHIN-Manufacturer-div").css("display", "block");
         $("#WHIN-Manufactureraddress-div").css("display", "block");
    }else if ( a === "Bucket"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-bucket-div").css("display", "block");
        
        $("#WHIN-colorant-div").css("display", "none");
        $("#WHIN-resin-div").css("display", "none");
        $("#WHIN-lable-div").css("display", "none");
        $("#WHIN-quantityperpack-div").css("display", "none");
        
        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");
        $(".btndiv").css("display", "block");
       
        $("#WHIN-Manufacturer-div").css("display", "block");
        $("#WHIN-Manufactureraddress-div").css("display", "block");
         
    }else if ( a === "Lable"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-lable-div").css("display", "block");

        
        $("#WHIN-colorant-div").css("display", "none");
        $("#WHIN-resin-div").css("display", "none");
        $("#WHIN-bucket-div").css("display", "none");
        $("#WHIN-quantityperpack-div").css("display", "none");
    
        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");
        $(".btndiv").css("display", "block");
       
         $("#WHIN-Manufacturer-div").css("display", "block");
         $("#WHIN-Manufactureraddress-div").css("display", "block");
    }else if ( a === "LLDPE"){
        $("#WHIN-productname-div").css("display", "block");
        $("#WHIN-batchnumber-div").css("display", "block");
        $("#WHIN-lotnumber-div").css("display", "block");
        $("#WHIN-resin-div").css("display", "block");
        $("#WHIN-packquantity-div").css("display", "block");
        $("#WHIN-quantityperpack-div").css("display", "block");

        $("#WHIN-lable-div").css("display", "none");
        $("#WHIN-colorant-div").css("display", "none");
        $("#WHIN-bucket-div").css("display", "none");


        $("#WHIN-DMF-NONDMF-div").css("display", "block");
        $("#WHIN-unit-div").css("display", "block");
        $("#WHIN-Date-div").css("display", "block");
        $(".btndiv").css("display", "block");
        $("#WHIN-venderanme-div").css("display", "block");
         $("#WHIN-venderaddress-div").css("display", "block");
         $("#WHIN-Manufacturer-div").css("display", "block");
         $("#WHIN-Manufactureraddress-div").css("display", "block");
    }
}
var submitWHdata = () =>{
    var WHdata = {};
    WHdata.productcatagory=
    WHdata.productname=
    WHdata.batchnumber=
    WHdata.lotnumber=
    WHdata.resingreda=
    WHdata.colorantgreda=
    WHdata.packquantity=
    WHdata.kgsperpack=
    WHdata.bucketquantity=
    WHdata.lablequantity=
    WHdata.DMForNONDMF=
    WHdata.unitlocation=
    WHdata.vendername=
    WHdata.venderaddress=
    WHdata.manufacturername=
    WHdata.Manufactureraddress=
    WHdata.entrydate=
    


}