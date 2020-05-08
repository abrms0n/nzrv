const header = `
    <div class="header-container">
        <header class="header">
            <a href="./index.html"><img src="images/logo.svg" alt="Галерея безупречной электроники Назáров" class="header__logo"></a>
            <nav class="header__nav">
                <ul class="header__nav-links">
                    <li class="header__nav-links-item"><a href="./about.html" class="header__nav-link">О компании</a></li>
                    <li class="header__nav-links-item"><a href="./smart-home.html" class="header__nav-link">Умный дом</a></li>
                    <li class="header__nav-links-item"><a href="./services.html" class="header__nav-link">Услуги</a></li>
                    <li class="header__nav-links-item"><a href="./architects.html" class="header__nav-link">Архитекторам</a></li>
                    <li class="header__nav-links-item"><a href="./catalog.html" class="header__nav-link">Каталог</a></li>
                    <li class="header__nav-links-item"><a href="./contacts-page.html" class="header__nav-link">Контакты</a></li>
                </ul>
            </nav>
            <div class="header__communication">
                <a href="tel:+74956467107" class="header__communication-item">+7 (495) 646-71-07</a>
                <a href="javascript:void(0)" data-modal="signToDemo" class="header__communication-item open-modal">Запись в демо-зал</a>
            </div>
            <div class="header__icons">
                <a href="javascript:void(0)" class="header__icon"><div class="icon-search"></div></a>
                <a href="./personal.html" class="header__icon"><div class="icon-user"></div></a>
                <a href="./cart.html" class="header__icon"><div class="icon-shopping-bag"></div></a>
            </div>
        </header>
    </div>
    <div class="wrapper" id="top">
        <div class="header-mobile">
            <div class="header-mobile__icons">
                <a id="menu-opener" href="javascript:void(0)" class="header-mobile__icon"><div class="icon-burger1px"></div></a>
                <a href="javascript:void(0)" class="header-mobile__icon"><div class="icon-search1px"></div></a>
            </div>
            <a class="header-mobile__logo-link" href="./index.html"><img src="images/logo.svg" alt="Галерея безупречной электроники Назáров" class="header-mobile__logo"></a>
            <div class="header-mobile__icons">
                <a href="./personal.html" class="header-mobile__icon"><div class="icon-user1px"></div></a>
                <a href="./cart.html" class="header-mobile__icon"><div class="icon-shopping-bag1px"></div></a>
            </div>
            <div class="header-mobile__menu">
                <img src="images/close.svg" alt="закрыть" class="header-mobile__close-icon">
                <a class="header-mobile__logo-link" href="./index.html">
                    <img src="images/logo.svg" alt="Галерея безупречной электроники Назáров" class="header-mobile__menu-logo">
                </a>
                <div class="header-mobile__communication">
                    <a href="./auth.html" class="header-mobile__communication-item">Вход / регистрация</a>
                    <a href="tel:+74956467107" class="header-mobile__communication-item">+7 (495) 646-71-07</a>
                    <a href="javascript:void(0)" data-modal="signToDemo" class="header-mobile__communication-item open-modal">Запись в демо-зал</a>
                </div>
                <nav class="header-mobile__nav">
                    <ul class="header-mobile__nav-links">
                        <li class="header-mobile__nav-links-item"><a href="./about.html" class="header-mobile__nav-link">О компании</a></li>
                        <li class="header-mobile__nav-links-item"><a href="./smart-home.html" class="header-mobile__nav-link">Умный дом</a></li>
                        <li class="header-mobile__nav-links-item"><a href="./services.html" class="header-mobile__nav-link">Услуги</a></li>
                        <li class="header-mobile__nav-links-item"><a href="./architects.html" class="header-mobile__nav-link">Архитекторам</a></li>
                        <li class="header-mobile__nav-links-item"><a href="./catalog.html" class="header-mobile__nav-link">Каталог</a></li>
                        <li class="header-mobile__nav-links-item"><a href="./contacts-page.html" class="header-mobile__nav-link">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div class="header-mobile__darken"></div>
        </div>
    </div>
`

$('.body').append(header);






// прилипающая к верху шапка 

$(window).scroll(function(){
    if($(window).scrollTop()>220){
        $('.header-container').addClass('header-container_fixed');

        // цветовая тема для главной после возврата в статику

        if ($('.body').hasClass('index')) {
                $('.header__nav-link').css('color','#232323');
                $('.header__communication-item').css('color','#232323');
                $('.header__icon').css('color','#232323');
        }
    }
});

$(window).scroll(function(){
    if($(window).scrollTop()<220){
        $('.header-container').removeClass('header-container_fixed');
        if ($('.body').hasClass('index')) {
            $('.header__nav-link').css('color','#fff');
            $('.header__communication-item').css('color','#fff');
            $('.header__icon').css('color','#fff');
        }
    }
});

