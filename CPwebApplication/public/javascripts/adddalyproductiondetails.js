var dalyproductinpage= () =>{
    
    $("#bodymain").empty();
    $("#bodymain").load("HTM/adddalyproduction.htm");

}
var adddalyprodctiondata =()=>{

    var dalyProduction ={};
    dalyProduction.batchnumber = $("#dpdbatchnumber").val();
    dalyProduction.productname = $("#dpdproductname").val();
    dalyProduction.productcode = $("#dpdproductcode").val();
    dalyProduction.resin =  $("#dpdresin").val();
    dalyProduction.colorant = $("#dpdcolorant").val();
    dalyProduction.okproduction = $("#dpdOKproduction").val();
    dalyProduction.rejection= $("#dpdrejection").val();
    dalyProduction.totalproduction = $("#dpdtotalproduction").val();
    dalyProduction.machinecode = $("#dpdmachinecode").val();
    dalyProduction.shift= $("#dpdshift").val();
    dalyProduction.date= $("#dpdDate").val();
    dalyProduction.DMForNONDMF=$("#dpd-DMF-NONDMF").val();
    dalyProduction.Proctcatagory=$("#dpd-P_category").val();
    dalyProduction.Unit=$("#dpd-unit").val();

    getdalyURL = '/add/daly/production';
    
    axios.post(getdalyURL,dalyProduction).then((result)=>{

    }).catch((err)=>{

    })



}