var openfginwindo =()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/FGIN.htm");
}

var FGdataIN =()=>{
    var fgdatainput={}
    fgdatainput.batchnumber = $("#FGINbatchnumber").val();
    fgdatainput.productname =$("#FGINproductnamec").val();
    fgdatainput.productcode = $("#FGINproductcode").val();
    fgdatainput.resin =$("#FGINresin").val();
    fgdatainput.colorant= $("#FGINcolorant").val();
    fgdatainput.boxquantity= $("#FGINboxquantity").val();
    fgdatainput.quantityperbox=$("#FGINquantityperbox").val();
    fgdatainput.dmfornondmf=$("#FGIN-DMF-NONDMF").val();
    fgdatainput.productcatagory=$("#FGIN-P_category").val();
    fgdatainput.unit=$("#FGIN-unit").val();
    fgdatainput.date=$("#FGINDate").val();

    console.log(fgdatainput);
    getfginURL= '/add/fg/input';
    axios.post(getfginURL,fgdatainput).then((result)=>{

    }).catch((err)=>{

    })
}