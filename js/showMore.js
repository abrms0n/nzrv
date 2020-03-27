'use strict'
if($(window).width() <= '1350') {
    $('.hidden-text').css('display','none');
}

$('.show-more').click(function(){
    $('.hidden-text').css('display','block');
    $('.show-more').css('display','none');
})
