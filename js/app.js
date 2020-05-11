'use strict'

$('#about').click(function() {
    $('.product-box__about_characteristics').fadeOut(1);
    $('.product-box__about_questions').fadeOut(1);
    $('.product-box__about-about').fadeIn(1);
    $('#about').addClass('product-box__info-button_active');
    $('#chars').removeClass('product-box__info-button_active');
    $('#question').removeClass('product-box__info-button_active');
})


$('#chars').click(function() {
    $('.product-box__about-about').fadeOut(1);
    $('.product-box__about_questions').fadeOut(1);
    $('.product-box__about_characteristics').fadeIn(1);
    $('#about').removeClass('product-box__info-button_active');
    $('#chars').addClass('product-box__info-button_active');
    $('#question').removeClass('product-box__info-button_active');
})


$('#question').click(function() {
    $('.product-box__about-about').fadeOut(1);
    $('.product-box__about_characteristics').fadeOut(1);
    $('.product-box__about_questions').fadeIn(1);
    $('#about').removeClass('product-box__info-button_active');
    $('#chars').removeClass('product-box__info-button_active');
    $('#question').addClass('product-box__info-button_active');
})
$('.slider').slick({
    dots: true
});
'use strict'

const scrollUp = `
    <a href="#top" class="scroll-up">
        <img class="scroll-up__image" src="images/up-arrow.svg" alt="вверх">
    </a>
`

const contactUs = `
    <a data-modal="callBack" class="contact-us open-modal" href="javascript:void(0)">Связаться с нами</a>
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

'use strict'

$('.buttons-radio__elem').click(function() {
    event.preventDefault();

    if (!$(this).hasClass('buttons-radio__elem_disabled')) {
        
        $('.solutions-item_active').removeClass('solutions-item_active');
        $('.buttons-radio__elem_active').removeClass('buttons-radio__elem_active');
        let tabNo = $(this).attr('data-tab');
        let tab = $('.solutions-item[data-tab="'+ tabNo +'"]');

        $(this).addClass('buttons-radio__elem_active');
        tab.addClass('solutions-item_active');
    }
})

$('.buttons-radio__elem[data-tab="all"]').click(function() {
    event.preventDefault();
    $('.solutions-item').addClass('solutions-item_active');
    $(this).addClass('buttons-radio__elem_active');
})










document.addEventListener('click', function(event) {
    if (event.target.classList.contains('icon-plus')) {
        event.target.closest('.cart-item').querySelector('input').value++;
    }
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('icon-minus')  && event.target.closest('.cart-item').querySelector('input').value > 1 ) {
        event.target.closest('.cart-item').querySelector('input').value--;
    }
})


$('#showSecondFloor').click(function(){
    $('.about-virtual_first').fadeOut(1);
    $('.about-virtual_second').fadeIn(1);
    $('#showSecondFloor').fadeOut(1);
    $('#showFirstFloor').fadeIn(1);
});

$('#showFirstFloor').click(function(){
    $('.about-virtual_second').fadeOut(1);
    $('.about-virtual_first').fadeIn(1);
    $('#showFirstFloor').fadeOut(1);
    $('#showSecondFloor').fadeIn(1);
});
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

let brandsString = 'Audio-Technica AudioLab AudioQuest B&W Bang&Olufsen Beats Beyerdynamic Bose Campfire Audio Cellularline Cowon Definitive-Technology Denon Densen Dexibell Dunu Etymotic FENDER FiiO Final-Audio-Design Focal Fostex Grado Harman Kardon HiFiMAN Huawei Invotone JBL JVC K-ARRAY KEF KOSS Klipsch MEE-Audio Mackie Magnat Marshall Master&Dynamic Meters Metz Meze MrSpeakers Musical-Fidelity NAD Nobby OPPO Onkyo PSB Panasonic Pioneer Plantronics PreSonus Proel Quad RCF RHA Radius Reloop Ritmix Sennheiser Shure Simgot Skullcandy SleepPhones Sony Stax Technics Ultrasone V-moda Volta Westone Xiaomi Yamaha Z'

let brands = brandsString.split(' ');

let checkboxes = brands.map(function (brand) {
    return `
    <input type="checkbox" class="checkbox" id="${brand}">
    <label class="checkbox-label" for="${brand}">${brand}</label>
    `
})

$('.listing-container__brands-container_hidden').append(checkboxes);



"use strict"


    let products = [
        {
            name: "Наушники Audeze LCD-4z",
            image: "audeze-lcd-4z.png",
            vendorCode: 181151,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Ritmix RH-455BTH Black",
            image: "ritmix.png",
            vendorCode: 189128,
            fav: false,
            price: "730"            
        },

        {
            name: "Наушники Focal Stellia",
            image: "focal-phones.png",
            vendorCode: 189944,
            fav: false,
            price: "229 900"            
        },


        {
            name: "Наушники Sennheiser MOMENTUM",
            image: "sennheiser-momentum.png",
            vendorCode: 189834,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Audio Technica ATH-ANC900BTBK",
            image: "AT-anc-900.png",
            vendorCode: 189128,
            fav: false,
            price: "22 990"            
        },

        {
            name: "Наушники Audio Technica ATH-SR50BT BW",
            image: "AT-bt-bw.png",
            vendorCode: 193729,
            fav: true,
            price: "14 990"            
        },

        {
            name: "Наушники Soul PURE Wireless + Charcoal",
            image: "soul.png",
            vendorCode: 196524,
            fav: false,
            price: "1 890"            
        },

        {
            name: "Наушники Panasonic RP-HF300GC-A",
            image: "panasonic.png",
            vendorCode: 192211,
            fav: false,
            price: "1 310"            
        },

        {
            name: "JBL Tune 600BTNC blue (JBLT600BTNCBLU)",
            image: "jbl.png",
            vendorCode: 192218,
            fav: true,
            price: "4 190"            
        },

        {
            name: "Наушники Audeze LCD-4z",
            image: "audeze-lcd-4z.png",
            vendorCode: 181151,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Ritmix RH-455BTH Black",
            image: "ritmix.png",
            vendorCode: 189128,
            fav: false,
            price: "730"            
        },

        {
            name: "Наушники Focal Stellia",
            image: "focal-phones.png",
            vendorCode: 189944,
            fav: false,
            price: "229 900"            
        },


        {
            name: "Наушники Sennheiser MOMENTUM",
            image: "sennheiser-momentum.png",
            vendorCode: 189834,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Audio Technica ATH-ANC900BTBK",
            image: "AT-anc-900.png",
            vendorCode: 189128,
            fav: false,
            price: "22 990"            
        },

        {
            name: "Наушники Audio Technica ATH-SR50BT BW",
            image: "AT-bt-bw.png",
            vendorCode: 193729,
            fav: true,
            price: "14 990"            
        },

        {
            name: "Наушники Sennheiser MOMENTUM",
            image: "sennheiser-momentum.png",
            vendorCode: 189834,
            fav: true,
            price: "44 900"            
        },

        {
            name: "Наушники Audio Technica ATH-ANC900BTBK",
            image: "AT-anc-900.png",
            vendorCode: 189128,
            fav: false,
            price: "22 990"            
        },

        {
            name: "Наушники Audio Technica ATH-SR50BT BW",
            image: "AT-bt-bw.png",
            vendorCode: 193729,
            fav: true,
            price: "14 990"            
        }

    ]

    let items = products.map(function(item){
        if (item.fav == true) {
        return `
        <div class="listing-item">
            <div class="listing-item__image-container">
                <a class="listing-item__image-link" href="./product.html">
                    <img src="images/${item.image}" alt="${item.name}" class="listing-item__image">
                </a>
            </div>
            <a class="listing-item__title" href="./product.html">${item.name}</a> 
            <div class="listing-item__info">
                <span class="listing-item__vendor-code">Артикул: ${item.vendorCode}</span>
                <div class="listing-item__fav">
                    <div class="icon-star-filled"></div>
                    <p class="listing-item__fav-text">&nbsp;в&nbsp;избранном</p>
                </div>
                <span class="listing-item__price">${item.price}</span>
                <a href="./product.html" class="button button_theme_gold">В корзину</a>
            </div>
        </div>
        `
        } else {
            return `
        <div class="listing-item">
            <div class="listing-item__image-container">
                <a class="listing-item__image-link" href="./product.html">
                    <img src="images/${item.image}" alt="${item.name}" class="listing-item__image">
                </a>
            </div>
            <a class="listing-item__title" href="./product.html">${item.name}</a> 
            <div class="listing-item__info">
                <span class="listing-item__vendor-code">Артикул: ${item.vendorCode}</span>
                <div class="listing-item__fav">
                    <div class="icon-star-empty"></div>
                    <p class="listing-item__fav-text">&nbsp;в&nbsp;избранное</p>
                </div>
                <span class="listing-item__price">${item.price}</span>
                <a href="./product.html" class="button button_theme_gold">В корзину</a>
            </div>
        </div>
        `
        }
    });

    $(".listing-container__column_products").append(items);

'use strict'

$('#menu-opener').click(function(){
    $('.header-mobile__darken').css('display','block');
    $('.header-mobile__menu').css('left','-16px');
    $("body").css("overflow", "hidden");
})

$('.header-mobile__darken').click(function(){
    $('.header-mobile__darken').css('display','none');
    $('.header-mobile__menu').css('left','-360px');
    $("body").css("overflow", "auto");
})

$('.header-mobile__close-icon').click(function(){
    $('.header-mobile__darken').css('display','none');
    $('.header-mobile__menu').css('left','-360px');
    $("body").css("overflow", "auto");
})




$('#filters-opener').click(function(){
    $('.filters-mobile__darken').css('display','block');
    $('.filters-mobile').css('left','0');
    $("body").css("overflow", "hidden");
})

$('.filters-mobile__darken').click(function(){
    $('.filters-mobile__darken').css('display','none');
    $('.filters-mobile').css('left','-360px');
    $("body").css("overflow", "auto");
})

$('.filters-mobile__close-icon').click(function(){
    $('.filters-mobile__darken').css('display','none');
    $('.filters-mobile').css('left','-360px');
    $("body").css("overflow", "auto");
})

'use strict'

const mailToDir = `
    <div class="modal-overlay" data-modal="mailToDir">
        <div class="modal-window">
            <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Письмо директору</h2>
            <form action="" class="modal-window__form">
                <div class="modal-window__row">
                    <label class="modal-window__label" for="mail-name">Имя</label>
                    <input required id="mail-name" type="text" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="mail-tel">Телефон</label>
                    <input required id="mail-tel" pattern="[0-9]{7,10}" type="tel" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="mail-email">E-mail</label>
                    <input required id="mail-email" type="email" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="mail-comment">Сообщение</label>
                </div>
                <textarea minlength="140" placeholder="не менее 140 символов" required id="mail-comment" class="modal-window__textarea"></textarea>
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeR_Q8UAAAAAEC5UaGRFw4QRfuCLZzWB3lO6AB-&amp;co=aHR0cHM6Ly9uYXphcm92LWdhbGxlcnkucnU6NDQz&amp;hl=ru&amp;v=wk6lx42JIeYmEAQSHndnyT8Q&amp;theme=dark&amp;size=normal&amp;cb=ravpmtn3q562" width="304" height="78" role="presentation" name="a-8z0dctg48gqo" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                <input type="submit" class="button button_theme_gold" value="отправить" >
            </form>
        </div>
    </div>
`;

    
const orderService = `
    <div class="modal-overlay" data-modal="orderService">
        <div class="modal-window">
            <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Заказать услугу</h2>
            <form action="" class="modal-window__form">
                <div class="modal-window__row">
                    <label class="modal-window__label" for="name">Имя</label>
                    <input required id="name" type="text" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-tel">Телефон</label>
                    <input required id="demo-tel" pattern="[0-9]{7,10}" type="tel" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-email">E-mail</label>
                    <input required id="demo-email" type="email" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-comment">Комментарий</label>
                    <input  id="demo-comment" type="text" class="modal-window__input-text">
                </div>
                <p class="modal-window__hint">
                    Наши консультанты свяжутся с Вами в ближайшее время.
                </p>
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeR_Q8UAAAAAEC5UaGRFw4QRfuCLZzWB3lO6AB-&amp;co=aHR0cHM6Ly9uYXphcm92LWdhbGxlcnkucnU6NDQz&amp;hl=ru&amp;v=wk6lx42JIeYmEAQSHndnyT8Q&amp;theme=dark&amp;size=normal&amp;cb=ravpmtn3q562" width="304" height="78" role="presentation" name="a-8z0dctg48gqo" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="заказать" >
            </form>
        </div>
    </div>
`;

const signToNews = `
    <div class="modal-overlay" data-modal="signToNews"> 
        <div class="modal-window">
            <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Успешно</h2>
            <p class="modal-window__message">
                Теперь Вы подписаны на новости
            </p>
        </div>
    </div>
`;

const signToDemo = `
    <div class="modal-overlay" data-modal="signToDemo">
        <div class="modal-window">
            <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Запись в демо-зал</h2>
            <form action="" class="modal-window__form">
                <div class="modal-window__row">
                    <label class="modal-window__label" for="name">Имя</label>
                    <input required id="name" type="text" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-tel">Телефон</label>
                    <input required id="demo-tel" pattern="[0-9]{7,10}" type="tel" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-email">E-mail</label>
                    <input required id="demo-email" type="email" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-comment">Комментарий</label>
                    <input  id="demo-comment" type="text" class="modal-window__input-text">
                </div>
                <p class="modal-window__hint">
                    Наши консультанты свяжутся с Вами в ближайшее время для организации прослушивания.
                </p>
                <p class="modal-window__hint">
                    О возможности организации демонстрации техники в удобном для вас месте уточните у нашего консультанта.
                </p>
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeR_Q8UAAAAAEC5UaGRFw4QRfuCLZzWB3lO6AB-&amp;co=aHR0cHM6Ly9uYXphcm92LWdhbGxlcnkucnU6NDQz&amp;hl=ru&amp;v=wk6lx42JIeYmEAQSHndnyT8Q&amp;theme=dark&amp;size=normal&amp;cb=ravpmtn3q562" width="304" height="78" role="presentation" name="a-8z0dctg48gqo" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться" >
            </form>
        </div>
    </div>
`;

const orderProject = `
    <div class="modal-overlay" data-modal="orderProject">
        <div class="modal-window">
            <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Заказать проектирование</h2>
            <form action="" class="modal-window__form">
                <div class="modal-window__row">
                    <label class="modal-window__label" for="name">Имя</label>
                    <input required id="name" type="text" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-tel">Телефон</label>
                    <input required id="demo-tel" pattern="[0-9]{7,10}" type="tel" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-email">E-mail</label>
                    <input required id="demo-email" type="email" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-comment">Комментарий</label>
                    <input  id="demo-comment" type="text" class="modal-window__input-text">
                </div>
                <p class="modal-window__hint">
                    Наши консультанты свяжутся с Вами в ближайшее время.
                </p>
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeR_Q8UAAAAAEC5UaGRFw4QRfuCLZzWB3lO6AB-&amp;co=aHR0cHM6Ly9uYXphcm92LWdhbGxlcnkucnU6NDQz&amp;hl=ru&amp;v=wk6lx42JIeYmEAQSHndnyT8Q&amp;theme=dark&amp;size=normal&amp;cb=ravpmtn3q562" width="304" height="78" role="presentation" name="a-8z0dctg48gqo" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="заказать" >
            </form>
        </div>
    </div>
`;

const orderSpecialist = `
    <div class="modal-overlay" data-modal="orderSpecialist">
        <div class="modal-window">
            <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Заказать выезд специалиста</h2>
            <form action="" class="modal-window__form">
                <div class="modal-window__row">
                    <label class="modal-window__label" for="name">Имя</label>
                    <input required id="name" type="text" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-tel">Телефон</label>
                    <input required id="demo-tel" pattern="[0-9]{7,10}" type="tel" class="modal-window__input-text">
                </div>
                <div class="modal-window__row"> 
                    <label class="modal-window__label" for="demo-email">E-mail</label>
                    <input required id="demo-email" type="email" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-comment">Комментарий</label>
                    <input  id="demo-comment" type="text" class="modal-window__input-text">
                </div>
                <p class="modal-window__hint">
                    Наши консультанты свяжутся с Вами в ближайшее время.
                </p>
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeR_Q8UAAAAAEC5UaGRFw4QRfuCLZzWB3lO6AB-&amp;co=aHR0cHM6Ly9uYXphcm92LWdhbGxlcnkucnU6NDQz&amp;hl=ru&amp;v=wk6lx42JIeYmEAQSHndnyT8Q&amp;theme=dark&amp;size=normal&amp;cb=ravpmtn3q562" width="304" height="78" role="presentation" name="a-8z0dctg48gqo" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="заказать" >
            </form>
        </div>
    </div>
`;

const callBack = `
    <div class="modal-overlay" data-modal="callBack">
        <div class="modal-window">
            <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Заказать обратный звонок</h2>
            <form action="" class="modal-window__form">
                <div class="modal-window__row">
                    <label class="modal-window__label" for="name">Имя</label>
                    <input required id="name" type="text" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-tel">Телефон</label>
                    <input required id="demo-tel" pattern="[0-9]{7,10}" type="tel" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-email">E-mail</label>
                    <input required id="demo-email" type="email" class="modal-window__input-text">
                </div>
                <div class="modal-window__row">
                    <label class="modal-window__label" for="demo-comment">Комментарий</label>
                    <input  id="demo-comment" type="text" class="modal-window__input-text">
                </div>
                <p class="modal-window__hint">
                    Наши консультанты свяжутся с Вами в ближайшее время.
                </p>
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeR_Q8UAAAAAEC5UaGRFw4QRfuCLZzWB3lO6AB-&amp;co=aHR0cHM6Ly9uYXphcm92LWdhbGxlcnkucnU6NDQz&amp;hl=ru&amp;v=wk6lx42JIeYmEAQSHndnyT8Q&amp;theme=dark&amp;size=normal&amp;cb=ravpmtn3q562" width="304" height="78" role="presentation" name="a-8z0dctg48gqo" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="заказать">
            </form>
        </div>
    </div>
`;


const aboutDelivery = `
    <div class="modal-overlay" data-modal="aboutDelivery">
        <div class="modal-window">
        <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
        <h2 class="modal-window__title">Условия доставки по Москве</h2>
            <p class="page-text">
                Мы стремимся делать процесс каждой покупки максимально приятным и удобным, поэтому обязательно учтем все ваши пожелания по доставке заказа, которые вы оговорите с нашим менеджером или укажете в поле "Комментарии" в форме оформления заказа.
            </p>
            <p class="page-text">
                Также доставка товаров осуществляется бесплатно в районы 10 км от МКАД: Реутов, Салтыковка, Балашиха, Люберцы, Некрасовка, Жулебино, Томилино, Котельники, Дзержинский, Беседы, Развилка, Совхоз им.Ленина, Апаринки, Видное, Бутово, Новодрожжино, Суханово, Мамыри, Газопровод, Коммунарка, Румянцево, Саларьево, Говорово, Солнцево, Новопеределкино, Переделкино, Немчиново, Заречье, Сколково, Баковка, Трёхгорка, Немчиновка, Ромашково, Раздоры, Жуковка, Барвиха, Рублево, Гольево, Архаегельское, Красногорск, Митино, Путилково, Куркино, Химки, Долгопрудный, П.Северный, Вешки, Мытищи, Восточный.
            </p>
            <p class="modal-window__subtitle">
                Стоимость курьерской доставки в пределах МКАД - БЕСПЛАТНО!
            </p>
            <p class="page-text">
                Доставка за пределы МКАД далее 10 км осуществляется из расчета 30 рублей за 1 км.
            </p>
            <p class="modal-window__subtitle">
                Подъем товара на нужный этаж!
            </p>
            <p class="page-text">
                Мы поднимем ваш товар на нужный этаж. Если в вашем доме отсутствует лифт или товар не может быть поднят на лифте по причине его больших размеров, в этом случае поэтажный подъем оплачивается отдельно за каждую средне- и крупногабаритную позицию. Стоимость подъема среднегабаритных грузов составляет 100 рублей за этаж(включая первый). Стоимость подъема крупногабаритных грузов (ЖК-телевизоры, плазменные панели от 27") составляет 200 рублей за этаж (включая первый).
            </p>
            <p class="modal-window__subtitle">
                Самовывоз из пункта выдачи!
            </p>
            <p class="page-text">
                Вы можете самостоятельно забрать свои заказы из нашего магазина: <br>
                Москва, ул. Большая Ордынка, д.13/9 <br>
                пн-пт 10:00-20:00, сб-вс 10:00-19:00
            </p>
            
        </div>
    </div>
`;


const expostroyMap = `
<div class="modal-overlay" data-modal="expostroyMap">
    <div class="modal-window modal-window_wide">
        <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
        <h2 class="modal-window__title">Наш стенд в Экспострое</h2>
        <img src="images/expostroy.jpg" class="contacts-column-img" alt="стенд в Экспострое">
    </div>
</div>
`;


const downloadBlueprints = `
<div class="modal-overlay" data-modal="downloadBlueprints">
    <div class="modal-window">
        <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
        <h2 class="modal-window__title">Чертежи и сопутствующие материалы</h2>
        <div class="modal-window__downloads">
            <div class="modal-window__download">
                <p class="modal-window__text">Чертеж.pdf</p>
                <a href="javascript:void(0)" class="modal-window__download-link">Скачать</a>
            </div>
            <div class="modal-window__download">
                <p class="modal-window__text">Список всей техники проекта.xls</p>
                <a href="javascript:void(0)" class="modal-window__download-link">Скачать</a>
            </div>
            <div class="modal-window__download">
                <p class="modal-window__text">Информация о дизайнере.pdf</p>
                <a href="javascript:void(0)" class="modal-window__download-link">Скачать</a>
            </div>
        </div>
        <a class="button button_theme_gold href="javascript:void(0)">скачать всё</a>
    </div>
</div>
`;

const fastOrder = `
<div class="modal-overlay" data-modal="fastOrder">
    <div class="modal-window">
        <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
        <h2 class="modal-window__title">Быстрый заказ</h2>
        <form action="" class="modal-window__form">
            <div class="modal-window__row">
                <label class="modal-window__label" for="name">ФИО</label>
                <input required id="name" type="text" class="modal-window__input-text">
            </div>
            <div class="modal-window__row">
                <label class="modal-window__label" for="demo-tel">Телефон</label>
                <input required id="demo-tel" pattern="[0-9]{7,10}" type="tel" class="modal-window__input-text">
            </div>
            <div class="modal-window__row">
                <label class="modal-window__label" for="demo-email">E-mail</label>
                <input required id="demo-email" type="email" class="modal-window__input-text">
            </div>
        <input style="margin: 40px auto 0 auto" type="submit" class="button button_theme_gold" value="Оформить">
        </form>
    </div>
</div>
`;



$('.open-modal').click(function() {
    event.preventDefault();

    let modalName = $(this).attr('data-modal');

    switch(modalName) {
        case 'callBack':
            $('.body').append(callBack);
            break
        case 'mailToDir':
            $('.body').append(mailToDir); 
            break
        case 'orderService':
            $('.body').append(orderService);
            break
        case 'signToNews':
            $('.body').append(signToNews);
            break
        case 'signToDemo':
            $('.body').append(signToDemo);
            break
        case 'orderProject':
            $('.body').append(orderProject);
            break
        case 'orderSpecialist':
            $('.body').append(orderSpecialist);
            break
        case 'aboutDelivery':
            $('.body').append(aboutDelivery);
            break
        case 'expostroyMap':
            $('.body').append(expostroyMap);
            break
        case 'downloadBlueprints':
            $('.body').append(downloadBlueprints);
            break
        case 'fastOrder':
            $('.body').append(fastOrder);
            break

    }

    $('.modal-overlay').fadeIn(500);

    $(".body").css("overflow", "hidden");

    $('.modal-window__close-icon').click(function() {

        $(this).parent().parent().fadeOut(500);
        setTimeout(function() {
            $('.modal-overlay').remove();
        }, 500);

        $(".body").css("overflow", "auto");
    });
    
});




$('.portfolio-item-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }

    ]
  });
$('.portfolio__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }

    ]
  });
'use strict'

$('.project-calc__radio-elem').click(function() {
    event.preventDefault();

    $('.project-calc__radio-elem_active').removeClass('project-calc__radio-elem_active');
    $(this).addClass('project-calc__radio-elem_active');
})


 // Calculate form
 $(document).on('change','.project-calc__checkbox', function () {
    var price = 5000;
    var options = new Array();
    var allPrice = 0;
    var square = $('input#calc-input').val();
    if (square == '')
    {
        $('input#calc-input').val('70');
    }
    if (square < 70) {
        square = 70;
    }

    var squarePrice = price * square;
    allPrice = squarePrice;
    $('.project-calc__column-checkbox .project-calc__checkbox:checked').each(function (){
        options.push($(this).attr('data-value'));
    })

    for (var i = 0; i < options.length; i++) {
        allPrice = Number(allPrice) + (Number(squarePrice) * Number(options[i]));
    }
    if (!$('.project-calc__column-checkbox .project-calc__checkbox').is(':checked'))
    {
        allPrice = 0;
    }
    $('.project-calc__result').html(allPrice);
})






$(document).ready(function () {
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
})
$('.service-slider__slides').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }

    ]
  });
'use strict'

function showMore(elem) {  
    $(elem).parent().children().show();
    $(elem).hide()
}

function showMoreFlex(elem) {  
    $(elem).parent().children().css('display', 'flex');
    $(elem).hide()
}