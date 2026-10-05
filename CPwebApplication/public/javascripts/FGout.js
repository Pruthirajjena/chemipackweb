
var openfgoutwindo =()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/FGout.htm");
}

var FGdataOUT =()=>{
    var fgdataout={}
    fgdataout.Costumer Name = $("#FGOUTCostumerName").val();
    fgdataout.InvoiceNumber = $("#FGOUTInvoiceNumber").val();
    fgdataout.batchnumber = $("#FGOUTbatchnumber").val();
    fgdataout.productname =$("#FGOUTproductnamec").val();
    fgdataout.productcode = $("#FGOUTproductcode").val();
    fgdataout.resin =$("#FGOUTresin").val();
    fgdataout.colorant= $("#FGOUTcolorant").val();
    fgdataout.boxquantity= $("#FGOUTboxquantity").val();
    fgdataout.quantityperbox=$("#FGOUTquantityperbox").val();
    fgdataout.dmfornondmf=$("#FGOUT-DMF-NONDMF").val();
    fgdataout.productcatagory=$("#FGOUT-P_category").val();
    fgdataout.unit=$("#FGOUT-unit").val();
    fgdataout.date=$("#FGOUTDate").val();

    console.log(fgdataout);
    getfgoutURL= '/add/fg/out';
    axios.post(getfgoutURL,fgdataout).then((result)=>{

    }).catch((err)=>{

    })
}