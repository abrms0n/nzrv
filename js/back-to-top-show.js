'use strict'

const scrollUp = `
    <a href="#top" class="scroll-up">
        <img class="scroll-up__image" src="images/up-arrow.svg" alt="вверх">
    </a>
`

const contactUs = `
    <div class="contact-us">
        <a data-modal="call-back" class="contact-us__link open-modal" href="javascript:void(0)">Связаться с нами</a>
    </div>
`

$('body').append(scrollUp);
$('body').append(contactUs);

$(window).scroll(function(){
    if($(window).scrollTop()>600){
        $('.scroll-up').fadeIn()
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()<600){
        $('.scroll-up').fadeOut()
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()>700){
        $('.contact-us').fadeIn()
    }
})
