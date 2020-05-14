// прилипающая к верху шапка 

$(window).scroll(function(){
    if($(window).scrollTop()>220){
        $('.header-container').addClass('header-container_fixed');

        // цветовая тема для главной

        if ($('.body').hasClass('index')) {
                $('.header__nav-link').css('color','#232323');
                $('.header__communication-item').css('color','#232323');
                $('.header__icon').css('color','#232323');
        }
    }
});

$(window).scroll(function(){
    if($(window).scrollTop()<220){
        $('.header-container').removeClass('header-container_fixed');
        if ($('.body').hasClass('index')) {
            $('.header__nav-link').css('color','#fff');
            $('.header__communication-item').css('color','#fff');
            $('.header__icon').css('color','#fff');
        }
    }
});
