'use strict'

$('.solutions-radio__elem').click(function() {
    event.preventDefault();

    $('.solutions-list__item_active').removeClass('solutions-list__item_active');
    $('.solutions-radio__elem_active').removeClass('solutions-radio__elem_active');
    let tabNo = $(this).attr('data-tab');
    let tab = $('.solutions-list__item[data-tab="'+ tabNo +'"]');


    $(this).addClass('solutions-radio__elem_active');
    tab.addClass('solutions-list__item_active');
})

$('.solutions-radio__elem[data-tab="all"]').click(function() {
    event.preventDefault();
    $('.solutions-list__item').addClass('solutions-list__item_active');
    $(this).addClass('solutions-radio__elem_active');
})