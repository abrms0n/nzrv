'use strict'

function showMore(elem) {  
    $(elem).parent().children().show();
    $(elem).hide()
}

function showMoreFlex(elem) {  
    $(elem).parent().children().css('display', 'flex');
    $(elem).hide()
}