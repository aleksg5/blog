$(document).ready(function(){
   
    if($(document).width() > 768){
        if($(document).scrollTop()>80){
            $("#nav-home").css({
                "background" : "#fff",
                "box-shadow" : "0px 2px 5px 0px rgba(0,0,0,0.75)"
            });
            $("#nav-home a").css("color", "#333");
        }else{
            $("#nav-home").css({
                "background" : "transparent",
                "box-shadow" : "none"
            });
            $("#nav-home a").css("color", "#fff");
        }
    }
        $(document).scroll(function(){
            if($(document).width() > 768){
                if($(document).scrollTop()>80){
                    $("#nav-home").css({
                        "background" : "#fff",
                        "box-shadow" : "0px 2px 5px 0px rgba(0,0,0,0.75)"
                    });
                    $("#nav-home a").css("color", "#333");
                }else{
                    $("#nav-home").css({
                        "background" : "transparent",
                        "box-shadow" : "none"
                    });
                    $("#nav-home a").css("color", "#fff");
                }
            }
        });
});