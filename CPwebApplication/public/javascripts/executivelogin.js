
var exloginModal;
document.addEventListener("DOMContentLoaded", () => {
    exloginModal = new bootstrap.Modal('#executiveloginModal');
       
});
var executivevalidation = () => {
    var exeuserdata ={};
    exeuserdata.userid = document.getElementById("exelogin-userid").value;
    exeuserdata.password = document.getElementById("exelogin-password").value;

    console.log(exeuserdata);
    var appURL = '/executive/loginvalidation';

    // //we receive the data from user through the get method
    // axios.get(appURL,{params:{userAccountdetails: userdata}}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {

    // });

    // // we receive the data from user through the post method

    axios.post(appURL,exeuserdata).then((response)=>{
        console.log(response)
        if(response.data.msg1 == 'Invalid details'){
            $("#Exeloginerror-msg").text("Invalid credentials, please try again.");
        } else{
            $("#Exeloginerror-msg").text("");
            exloginModal.hide(); /// it is bootstrap modal hide method
            $("#addexecutivemodal").hide();
            loadeselectpage('afterlogin');
            
        }
    }).catch((err)=>{ 

    })
}