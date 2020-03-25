'use strict'
$('.open-modal').click(function() {
    event.preventDefault();

    var modalName = $(this).attr('data-modal');

    var modal = $('.modal-overlay[data-modal="'+ modalName +'"]');

    modal.fadeIn(500);
 
    $("body").css("overflow", "hidden");
})


$('.modal-window__close-button').click(function() {
    event.preventDefault();

    var parent = $(this).parent();

    $(parent).parent().fadeOut(500);
    $("body").css("overflow", "auto");


})