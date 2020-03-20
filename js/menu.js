'use strict'

$('#menu-opener').click(function(){
    $('.header-mobile__darken').css('display','block');
    $('.header-mobile__menu').css('left','-16px');
    $('.body').css('position','fixed');
})

$('.header-mobile__darken').click(function(){
    $('.header-mobile__darken').css('display','none');
    $('.header-mobile__menu').css('left','-360px');
    $('.body').css('position','static');
})

