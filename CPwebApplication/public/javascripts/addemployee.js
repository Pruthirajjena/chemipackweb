var addemployee = () =>{
    
    $("#bodymain").empty();
    $("#bodymain").load("HTM/addemploye.htm");

}
var addnewemployee = () =>{
   var employeedata={}; 
    employeedata.empname=$("#empname").val();
    employeedata.empCO=$("#empCO").val();
    employeedata.birthdate=$("#birthdate").val();
    employeedata.empmobile=$("#empmobile").val();
    employeedata.empEmail=$("#empEmail").val();
    employeedata.Gender=$('input[name="Gender"]:checked').val();
    employeedata.empaddress=$("#empaddress").val();
    employeedata.empID=$("#empID").val();
    employeedata.Joiningdate=$("#Joiningdate").val();
    employeedata.empdepartment=$("#empdepartment").val();
    console.log(employeedata);

    var getUrl = '/add/employee/data';

    if(employeedata.empname.length==0 || employeedata.empCO.length==0 || employeedata.birthdate.length==0 || employeedata.empmobile.length==0 ||
        employeedata.empEmail.length==0 || employeedata.Gender==undefined || employeedata.empaddress.length==0 || employeedata.empID.length==0 || 
        employeedata.Joiningdate.length==0 || employeedata.empdepartment.length==0
     ){
        $("#empms").text("Please fill the form.")
        console.log("please fill the form.")
    }else{
         $("#empms").text(" ")
        axios.post(getUrl,employeedata).then((result)=>{
        // console.log(result);        

        }).catch((err)=>{


        })
    }


    
}