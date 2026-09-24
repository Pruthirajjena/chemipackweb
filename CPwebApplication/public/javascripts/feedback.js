
var feedback =()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/feedback.htm");
}
var feedbackdata =()=>{
    feedbackcustomer={};
    feedbackcustomer.companyname= $("#fdcompanyname").val();
    feedbackcustomer.costumername= $("#fdname").val();
    feedbackcustomer.contactperson= $("#fdcontactperson").val();
    feedbackcustomer.contactNo = $("#fdcontactno").val();
    feedbackcustomer.email= $("#fdemail").val();
    feedbackcustomer.Address = $("#fdaddress").val();
    feedbackcustomer.ProductQuality= $('input[name="PQradio"]:checked').val();
    feedbackcustomer.AppearanceFinish= $('input[name="AFrdaio"]:checked').val();
    feedbackcustomer.DimensionalAccuracy= $('input[name="DAradio"]:checked').val();
    feedbackcustomer.ColourConsistency= $('input[name="CCradio"]:checked').val();
    feedbackcustomer.StrengthPerformance= $('input[name="SPradio"]:checked').val();
    feedbackcustomer.LeakageFunctionalPerformance= $('input[name="LFPradio"]:checked').val();
    feedbackcustomer.OverallSatisfaction= $('input[name="OSradio"]:checked').val();
    feedbackcustomer.comments = $('#comments').val();
    console.log(feedbackcustomer);


    var feedbackURL = '/feed/back/details';
    axios.post(feedbackURL,feedbackcustomer).then((response)=>{

    }).catch((err)=>{

    })


}
