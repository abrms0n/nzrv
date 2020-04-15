'use strict'

$('#about').click(function() {
    $('.product-box__about_characteristics').fadeOut(1);
    $('.product-box__about_questions').fadeOut(1);
    $('.product-box__about-about').fadeIn(1);
    $('#about').addClass('product-box__info-button_active');
    $('#chars').removeClass('product-box__info-button_active');
    $('#question').removeClass('product-box__info-button_active');
})


$('#chars').click(function() {
    $('.product-box__about-about').fadeOut(1);
    $('.product-box__about_questions').fadeOut(1);
    $('.product-box__about_characteristics').fadeIn(1);
    $('#about').removeClass('product-box__info-button_active');
    $('#chars').addClass('product-box__info-button_active');
    $('#question').removeClass('product-box__info-button_active');
})


$('#question').click(function() {
    $('.product-box__about-about').fadeOut(1);
    $('.product-box__about_characteristics').fadeOut(1);
    $('.product-box__about_questions').fadeIn(1);
    $('#about').removeClass('product-box__info-button_active');
    $('#chars').removeClass('product-box__info-button_active');
    $('#question').addClass('product-box__info-button_active');
})