'use strict'

$(window).scroll(function(){
    if($(window).scrollTop()>600){
        $('.scroll-up').fadeIn()
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()<600){
        $('.scroll-up').fadeOut()
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()>700){
        $('.contact-us').fadeIn()
    }
})
