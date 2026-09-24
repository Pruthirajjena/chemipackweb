
var loginModal;
document.addEventListener("DOMContentLoaded", () => {
    loginModal = new bootstrap.Modal('#adminloginmodal');
   
});

var exesignup = () => {

    var executivesignup ={};
    executivesignup.fullname= $("#exe-fullname").val();
    executivesignup.phone= $("#exe-phonenumber").val();
    executivesignup.exeuserid= $("#exe-userid").val();
    executivesignup.exepassword= $("#Executive-password").val();

    var execonfirmpassword= $ ("#Executive-Confirm-password").val();

    console.log(executivesignup);
    var getUrl = '/executive/executivesignup';

    axios.post(getUrl,executivesignup).then((result)=>{
        console.log(result);
        if(result.data.msg=="Success" ){
            $("#Exesignup-msg").text("Registration successful.")
        }else{
            $("#Exesignup-msg").text(" ")
        }

    }).catch((err)=>{

    })
}