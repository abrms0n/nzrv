const header = `
    <div class="header-container">
        <header class="header">
            <a href="./index.html"><img src="images/logo.svg" alt="Галерея безупречной электроники Назáров" class="header__logo"></a>
            <nav class="header__nav">
                <ul class="header__nav-links">
                    <li class="header__nav-links-item"><a href="./about.html" class="header__nav-link">О компании</a></li>
                    <li class="header__nav-links-item"><a href="javascript:void(0)" class="header__nav-link">Умный дом</a></li>
                    <li class="header__nav-links-item"><a href="./services.html" class="header__nav-link">Услуги</a></li>
                    <li class="header__nav-links-item"><a href="javascript:void(0)" class="header__nav-link">Архитекторам</a></li>
                    <li class="header__nav-links-item"><a href="./catalog.html" class="header__nav-link">Каталог</a></li>
                    <li class="header__nav-links-item"><a href="javascript:void(0)" class="header__nav-link">Контакты</a></li>
                </ul>
            </nav>
            <div class="header__communication">
                <a href="tel:+74956467107" class="header__communication-item">+7 (495) 646-71-07</a>
                <a href="javascript:void(0)" data-modal="sign-to-demo" class="header__communication-item open-modal">Запись в демо-зал</a>
            </div>
            <div class="header__icons">
                <a href="javascript:void(0)" class="header__icon"><div class="icon-search"></div></a>
                <a href="javascript:void(0)" class="header__icon"><div class="icon-user"></div></a>
                <a href="javascript:void(0)" class="header__icon"><div class="icon-shopping-bag"></div></a>
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
                <a href="javascript:void(0)" class="header-mobile__icon"><div class="icon-user1px"></div></a>
                <a href="javascript:void(0)" class="header-mobile__icon"><div class="icon-shopping-bag1px"></div></a>
            </div>
            <div class="header-mobile__menu">
                <a class="header-mobile__logo-link" href="./index.html">
                    <img src="images/logo.svg" alt="Галерея безупречной электроники Назáров" class="header-mobile__menu-logo">
                </a>
                <div class="header-mobile__communication">
                    <a href="javascript:void(0)" class="header-mobile__communication-item">Вход / регистрация</a>
                    <a href="tel:+74956467107" class="header-mobile__communication-item">+7 (495) 646-71-07</a>
                    <a href="javascript:void(0)" data-modal="sign-to-demo" class="header-mobile__communication-item open-modal">Запись в демо-зал</a>
                </div>
                <nav class="header-mobile__nav">
                    <ul class="header-mobile__nav-links">
                        <li class="header-mobile__nav-links-item"><a href="./about.html" class="header-mobile__nav-link">О компании</a></li>
                        <li class="header-mobile__nav-links-item"><a href="javascript:void(0)" class="header-mobile__nav-link">Умный дом</a></li>
                        <li class="header-mobile__nav-links-item"><a href="./services.html" class="header-mobile__nav-link">Услуги</a></li>
                        <li class="header-mobile__nav-links-item"><a href="javascript:void(0)" class="header-mobile__nav-link">Архитекторам</a></li>
                        <li class="header-mobile__nav-links-item"><a href="./catalog.html" class="header-mobile__nav-link">Каталог</a></li>
                        <li class="header-mobile__nav-links-item"><a href="javascript:void(0)" class="header-mobile__nav-link">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div class="header-mobile__darken"></div>
        </div>
    </div>
`

$('.body').append(header);