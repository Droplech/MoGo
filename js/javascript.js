$(document).ready(function(){

    var $menu = $("#menu");

    $(window).scroll(function(){
      if ( $(this).scrollTop() > 200 ){
    
            $menu.addClass("fixed");
    
        } else if($(this).scrollTop() <= 200) {
    
            $menu.removeClass("fixed");
    
        }
    
    });//scroll


    $('.slider_reviw_title').slick({
        infinite: true,

    })
    

    $(window).scroll(function(){
        if($(this).scrollTop()>1500){
            $('main .button_up').css('display','block');
        }else if($(this).scrollTop()<=700){
            $('main .button_up').css('display','none');
        }
    })
    





});

