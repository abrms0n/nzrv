// выпадающие списки 

if ($(window).width() <= '780') {

    $('#info-title').addClass('drop-down');
    $('#nav-title').addClass('drop-down');
}

jQuery(function ($) {
    $('input[type="tel"]').each(function () {
        $(this).mask('9 (999) 999-99-99');
    });

    $('input[type="phone"]').each(function () {
        $(this).mask('9 (999) 999-99-99');
    });

    $('input.project-calc__square-input').each(function () {
        $(this).mask('9?999');
    });
});
