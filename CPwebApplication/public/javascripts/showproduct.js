var showproduct =()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/producttemplet.htm");
}


var showallproduct = ()=>{


getshowaprodURL= '/show/product/onpage'
    axios.post(getshowaprodURL).then((result)=>{
        console.log(result)
    }).catch((err)=>{

})


}