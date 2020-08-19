/*global $, jQuery, alert*/

$(document).ready(function () {
    
    "use strict";
    
});
var b=-1;
$('.hotels .hotel-image img').on('click',function(){
    $(this).parent().animate({
        top:'150%',
        left:'50%',
        zIndex:b
    },500).animate({
        top:'50%',
        left:'50%'
    },400);
    b--;
});
// go top buttun
$(window).scroll(function(){
    if($(window).scrollTop() >1000)
        {
            $('.go-top').fadeIn();
        }
        else
        {
            $('.go-top').fadeOut();
        }
});
$('.go-top').click(function(){
    $('html, body').animate(
        {
            scrollTop: 0
        },1000);
});
//loading 
$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .sk-cube-grid").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});
$(".contact form").on('submit',function(e){
    e.preventDefault();
});

