'use strict'

$('.buttons-radio__elem').click(function () {
    event.preventDefault();
    if (!$(this).hasClass('buttons-radio__elem_disabled')) {
        $('.buttons-radio__elem_active').removeClass('buttons-radio__elem_active');
        $(this).addClass('buttons-radio__elem_active');
        let tabNo = $(this).attr('data-tab').replace('-','');
        let tab = $('.solutions-item[data-tab="' + tabNo + '"]');
        console.log(tab);
        let regex = new RegExp('\\b\\w*' + tabNo + '\\w*\\b');
        console.log(regex);
        $('.solutions-item').removeClass('solutions-item_active').filter(function () {
            return regex.test($(this).data('tab'))
        }).addClass('solutions-item_active');
    }
})

$('.buttons-radio__elem[data-tab="all"]').click(function () {
    event.preventDefault();
    $('.solutions-item').addClass('solutions-item_active');
    $(this).addClass('buttons-radio__elem_active');
})








