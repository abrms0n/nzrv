'use strict'

$('.drop-down').click(function() {
    if ($(this).hasClass('opened')) {
        $(this).next().fadeOut(300);
        $(this).removeClass('opened');
    } else {
        $(this).next().fadeIn(300);
        $(this).addClass('opened');
    }
});
