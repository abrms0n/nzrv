'use strict'

$('.solutions-radio__elem').click(function() {
    event.preventDefault();

    $('.solutions-item_active').removeClass('solutions-item_active');
    $('.solutions-radio__elem_active').removeClass('solutions-radio__elem_active');
    let tabNo = $(this).attr('data-tab');
    let tab = $('.solutions-item[data-tab="'+ tabNo +'"]');


    $(this).addClass('solutions-radio__elem_active');
    tab.addClass('solutions-item_active');
})

$('.solutions-radio__elem[data-tab="all"]').click(function() {
    event.preventDefault();
    $('.solutions-item').addClass('solutions-item_active');
    $(this).addClass('solutions-radio__elem_active');
})