
let now = new Date();

const footer = `
<div class="anti-wrapper anti-wrapper_theme_dark-gray">
    <div class="wrapper wrapper_theme_dark-gray">
        <footer class="footer">
            <div class="footer__columns">
                <div class="footer-column footer-column_contacts">
                    <h3 class="footer-column__title">Контакты</h3>
                    <ul class="footer-column__list">
                        <li class="footer-column__elem">
                            <a href="javascript:void(0)" class="footer-column__link"><div class="icon-map-pin"></div>&nbsp;г. Москва, Большая Ордынка, 13/9</a>
                        </li>
                        <li class="footer-column__elem">
                            <a href="javascript:void(0)" class="footer-column__link"><div class="icon-clock"></div>&nbsp;Пн-Сб 10:00-20:00, Вск 10:00-19:00</a>
                        </li>
                        <li class="footer-column__elem">
                            <a href="tel:+74956467107" class="footer-column__link"><div class="icon-phone"></div>&nbsp;+7 (495) 646-71-07</a>
                        </li>
                        <li class="footer-column__elem">
                            <a data-modal="signToDemo" href="javascript:void(0)" class="footer-column__link open-modal"><div class="icon-calendar"></div>&nbsp;Запись в демозал</a>
                        </li>
                        <li class="footer-column__elem">
                            <a data-modal="mailToDir" href="javascript:void(0)" class="footer-column__link open-modal"><div class="icon-mail"></div>&nbsp;Письмо директору</a>
                        </li>
                    </ul>
                </div>
                <div class="footer-column footer-column_info">
                    <h3 class="footer-column__title" id="info-title">Информация</h3>
                    <ul class="footer-column__list" id="info-list">
                        <li class="footer-column__elem">
                            <a href="javascript:void(0)" class="footer-column__link">Доставка</a>
                        </li>
                        <li class="footer-column__elem">
                            <a href="javascript:void(0)" class="footer-column__link">Оплата</a>
                        </li>
                        <li class="footer-column__elem">
                            <a href="javascript:void(0)" class="footer-column__link">Архитекторам</a>
                        </li>
                        <li class="footer-column__elem">
                            <a href="javascript:void(0)" class="footer-column__link">Акции</a>
                        </li>

                    </ul>
                </div>
                <div class="footer-column footer-column_nav">
                    <h3 class="footer-column__title" id="nav-title">Навигация</h3>
                    <nav class="footer__nav">
                        <ul class="footer-column__list">
                            <li class="footer-column__elem">
                                <a href="./about.html" class="footer-column__link">О галерее</a>
                            </li>
                            <li class="footer-column__elem">
                                <a href="./services.html" class="footer-column__link">Услуги</a>
                            </li>
                            <li class="footer-column__elem">
                                <a href="#portfolio" class="footer-column__link">Портфолио</a>
                            </li>
                            <li class="footer-column__elem">
                                <a href="#news" class="footer-column__link">Новости</a>
                            </li>
                        </ul>
                        <ul class="footer-column__list">
                            <li class="footer-column__elem">
                                <a href="javascript:void(0)" class="footer-column__link">Умный дом</a>
                            </li>
                            <li class="footer-column__elem">
                                <a href="./contacts-page.html" class="footer-column__link">Контакты</a>
                            </li>
                            <li class="footer-column__elem">
                                <a href="#brands" class="footer-column__link">Бренды</a>
                            </li>
                            <li class="footer-column__elem">
                                <a href="./catalog.html" class="footer-column__link">Каталог</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="footer__icons-row">
                <div class="footer__social-icons">
                    <a target="_blank" href="https://www.facebook.com/nasarovru"><img src="images/Facebook.svg" alt="facebook" class="footer__social-icon"></a>
                    <a target="_blank" href="https://vk.com/nasarovru"><img src="images/VK.svg" alt="vk" class="footer__social-icon"></a>
                    <a target="_blank" href="https://www.instagram.com/nazarovgallery/"><img src="images/Instagram.svg" alt="instagram" class="footer__social-icon"></a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCwzDaHmhUx0m389VdknSE6A"><img src="images/Youtube.svg" alt="youtube" class="footer__social-icon"></a>
                    <a target="_blank" href="https://www.houzz.ru/pro/nazarov-gallery/galereya-bezuprechnoy-elektroniki-nazarov"><img src="images/Houzz.svg" alt="houzz" class="footer__social-icon"></a>
                </div>
                <div class="footer__payment-icons">
                    <img src="images/fa-brands_cc-mastercard.svg" alt="mastercard" class="footer__payment-icon">
                    <img src="images/fa-brands_cc-visa.svg" alt="visa" class="footer__payment-icon">
                    <img src="images/fa-brands_cc-mir.svg" alt="МИР" class="footer__payment-icon">
                </div>
                <div class="footer__logo-container">
                    <img src="images/logo.svg" alt="Галерея безупречной электроники Назáров" class="footer__logo">
                    <a href="javascript:void(0)" data-modal="mailToDir" class="button button_theme_gold open-modal">письмо директору</a>
                </div>
            </div>
            <p class="footer__copyright">
                &copy;&nbsp;2011–${now.getFullYear()} Салон электроники «Назáров»
            </p>
        </footer>
    </div>
</div>
`;


$('.body').append(footer);

// выпадающие списки 

if ($(window).width() <= '780') {

    $('#info-title').addClass('drop-down');
    $('#nav-title').addClass('drop-down');
}







