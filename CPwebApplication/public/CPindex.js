var homepage =()=>{
    $("#bodymain").empty();
    $("#bodymain").load("HTM/homepage.htm");
  
}

var loadeselectpage = (type)=>{
    switch(type){
        case 'afterlogin':
        $("#itemdropdown").show();
        $("#allloginmenu").hide();
        break;
    }

};