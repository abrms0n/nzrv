'use strict'

$('.buttons-radio__elem').click(function() {
    event.preventDefault();

    $('.solutions-item_active').removeClass('solutions-item_active');
    $('.buttons-radio__elem_active').removeClass('buttons-radio__elem_active');
    let tabNo = $(this).attr('data-tab');
    let tab = $('.solutions-item[data-tab="'+ tabNo +'"]');


    $(this).addClass('buttons-radio__elem_active');
    tab.addClass('solutions-item_active');
})

$('.buttons-radio__elem[data-tab="all"]').click(function() {
    event.preventDefault();
    $('.solutions-item').addClass('solutions-item_active');
    $(this).addClass('buttons-radio__elem_active');
})







