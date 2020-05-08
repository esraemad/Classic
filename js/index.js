/* global $ document window mixitup */

$(document).ready(function(){
    
    ////////////////////////////////heghit window
    
    "use strict";
    
    $(".hed").height($(window).height());
     
    $(window).resize(function(){
        $(".hed").height($(window).height());
    })
    
    
    
    //////////////////////////////////active links 
    
    $(".navbar-default .navbar-nav>li>a").click(function(){
//        $(this).addClass('activeclass').siblings().removeClass('activeclass');
        
         $('.activeclass').removeClass('activeclass');
         $(this).addClass('activeclass');
    });
  
    
    
    //////////////////////////////////nav scroll
    
    
    $(window).scroll(function(){
        if( $(this).scrollTop() > 500 )
            {
                $(".navscrol").fadeIn(1000);
            }
        else
            {
                $(".navscrol").fadeOut(1000);
            }
       
    });
        

    
    
    //////////////////////////////////slick slider
    
    
    $('.slid').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay:true,
    });


     //////////////////////////////////smoth scroll
    
    
    $(".nav li a ").click(function(){
       
        $("html , body").animate({
            
        scrollTop:$("#" + $(this).data("value")).offset().top
            
        },1000);
    });
    
    
    //////////////////////////////////selected
    
    
    $(".project ul li").click(function(){
       $(".select").removeClass("select");
        $(this).addClass("select");
    });
    
    //////////////////////////////////suffle
    
     var mixer = mixitup('#choosepic');
   
    
    
    ////////////////////////////////// UP
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 300)
            {
                $(".upbtn").fadeIn();
            }
        else
            {
                $(".upbtn").fadeOut();
            }
        
    });
    
    $(".upbtn").click(function(){
       $(" html,body").animate({
         scrollTop:0 
       },1000);
    });
    
    
        ////////////////////////////////// Nicescroll

    
    $("body").niceScroll({
       cursorcolor:"#13be9d",
        cursorwidth:"12px",
        cursorborder:"1px solid #13be9d"
    });
  
       ////////////////////////////////// downslider
    
    
    $(".cilnts i").click(function(){
        $("html , body ").animate({
           scrollTop: $(".services").offset().top 
        },1000);
        
    });
    
     //////////////////////////////////  count to
    
 
     $(window).scroll(function(){
       if( $(this).scrollTop() >= $(".count").offset().top - 400 )

       {
           $('.timer').countTo();
       }
        }); 
    
    
});
