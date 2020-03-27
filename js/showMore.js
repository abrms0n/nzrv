'use strict'
if($(window).width() <= '1350') {
    $('.hidden-text').css('display','none');
}

$('.about-gallery__text-container .show-more').click(function(){
    $('.about-gallery__text-container .hidden-text').css('display','block');
    $('.about-gallery__text-container .show-more').css('display','none');
})

$('.best-brands__text-container .show-more').click(function(){
    $('.best-brands__text-container .hidden-text').css('display','block');
    $('.best-brands__text-container .show-more').css('display','none');
})