if($(window).width() <= '780') {

    $('#info-title').click(function(){
        if($('#info-list').hasClass('closed')) {
                $('#info-list').css('display','block');
                $('#info-list').animate({
                    opacity: 1,
                    height: 120,
                })
                $('#info-list').removeClass('closed');
                $('#info-title .icon-chevron-down').addClass('upsidedown');

        } else {
            $('#info-list').animate({
                opacity: 0,
                height: 0
            });
            setTimeout(function(){
                $('#info-list').css('display','none');
            }, 400);
            $('#info-list').addClass('closed');
            $('#info-title .icon-chevron-down').removeClass('upsidedown');
        }
    })


    $('#nav-title').click(function(){
        if($('.footer__nav').hasClass('closed')) {
            $('.footer__nav').css('display','block');
            $('.footer__nav').animate({
                opacity: 1,
                height: 250,
            })
            $('.footer__nav').removeClass('closed');
            $('#nav-title .icon-chevron-down').addClass('upsidedown');

        } else {
            $('.footer__nav').animate({
                opacity: 0,
                height: 0
            });
            setTimeout(function(){
                $('.footer__nav').css('display','none');
            }, 400);
            $('.footer__nav').addClass('closed');
            $('#nav-title .icon-chevron-down').removeClass('upsidedown');
        }
    })




}


