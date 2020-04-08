'use strict'

$('#menu-opener').click(function(){
    $('.header-mobile__darken').css('display','block');
    $('.header-mobile__menu').css('left','-16px');
    $("body").css("overflow", "hidden");
})

$('.header-mobile__darken').click(function(){
    $('.header-mobile__darken').css('display','none');
    $('.header-mobile__menu').css('left','-360px');
    $("body").css("overflow", "auto");
})

$('.header-mobile__close-icon').click(function(){
    $('.header-mobile__darken').css('display','none');
    $('.header-mobile__menu').css('left','-360px');
    $("body").css("overflow", "auto");
})




$('#filters-opener').click(function(){
    $('.filters-mobile__darken').css('display','block');
    $('.filters-mobile').css('left','0');
    $("body").css("overflow", "hidden");
})

$('.filters-mobile__darken').click(function(){
    $('.filters-mobile__darken').css('display','none');
    $('.filters-mobile').css('left','-360px');
    $("body").css("overflow", "auto");
})

$('.filters-mobile__close-icon').click(function(){
    $('.filters-mobile__darken').css('display','none');
    $('.filters-mobile').css('left','-360px');
    $("body").css("overflow", "auto");
})
