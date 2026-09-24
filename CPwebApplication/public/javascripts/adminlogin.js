
var loginModal;
document.addEventListener("DOMContentLoaded", () => {
    loginModal = new bootstrap.Modal('#adminloginmodal');
    
    
});


var parentlogin = () =>{

    var userdata ={};
    userdata.accountID = document.getElementById("Plogin-userid").value;
    userdata.password = document.getElementById("Plogin-password").value;

    console.log(userdata);
    var appURL = '/userdata/adminlogin';

    // //we receive the data from user through the get method
    // axios.get(appURL,{params:{userAccountdetails: userdata}}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {

    // });


    // // we receive the data from user through the post method
    axios.post(appURL,userdata).then((response)=>{
        console.log(response)
        if(response.data.msg == 'Invalid details'){
            $("#loginerror-msg").text("Invalid credentials, please try again.");
        } else {
            $("#loginerror-msg").text("");
            loginModal.hide(); /// it is bootstrap modal hide method
            
            loadeselectpage('afterlogin');
            
        }
    }).catch((err)=>{ 

    })
};