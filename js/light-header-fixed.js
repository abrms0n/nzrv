$(window).scroll(function(){
    if($(window).scrollTop()>220){
        $('.header-container').addClass('header-container_fixed')
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()<220){
        $('.header-container').removeClass('header-container_fixed')
    }
})