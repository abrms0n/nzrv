'use strict'

$('.drop-down').click(function() {
    if ($(this).hasClass('opened')) {
        $(this).next().animate({
            opacity: 0,
            height: "toggle"
          }, 500, function() {});
        $(this).removeClass('opened');
    } else {
        $(this).next().animate({
            opacity: 1,
            height: "toggle"
          }, 500, function() {});
        $(this).addClass('opened');
    }
});


// выпадающие списки футера

if ($(window).width() <= '780') {

  $('#info-title').addClass('drop-down');
  $('#nav-title').addClass('drop-down');
}