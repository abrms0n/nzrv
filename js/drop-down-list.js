'use strict'

$('#info-title').click(function(){
    if($('#info-list').hasClass('closed')) {
            $('#info-list').css('display','block');
            $('#info-list').animate({
                opacity: 1,
                height: 120,
            })
            $('#info-list').removeClass('closed');
            $('#info-title .icon-chevron-down').addClass('upsidedown');

    } else {
        $('#info-list').animate({
            opacity: 0,
            height: 0
        });
        setTimeout(function(){
            $('#info-list').css('display','none');
        }, 400);
        $('#info-list').addClass('closed');
        $('#info-title .icon-chevron-down').removeClass('upsidedown');
    }
})
 
// function openDropDown() {
//     $('.catalog-item__links_children').children().children().css('color','green');
// }


$('.catalog-item__link_parent').click(function() {
    $('.catalog-item__links_children').children().children().css('color','green');
});
