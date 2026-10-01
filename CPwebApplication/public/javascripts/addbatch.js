var openbatchwindo =()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/addbatch.htm");
}

var addbatchdetails =()=>{
    var newbatchdetails={};
    newbatchdetails.Productname = $("#Productname").val();
    newbatchdetails.Productcode = $("#Productcode").val()
    newbatchdetails.Resin = $("#Resin").val();
    newbatchdetails.Colourant = $("#Colourant").val();
    newbatchdetails.Batchsize = $("#Batchsize").val();
    newbatchdetails.Batchnumber = $("#Batchnumber").val();
    newbatchdetails.DMF_NONDMF = $("#DMF-NONDMF").val();
    newbatchdetails.P_category = $("#P_category").val();
    newbatchdetails.Date = $("#Batchdate").val();

    console.log(newbatchdetails);
    getnewbatchURL= '/add/New/batchdata';
    axios.post(getnewbatchURL,newbatchdetails).then((result)=>{

    }).catch((err)=>{

    })

}