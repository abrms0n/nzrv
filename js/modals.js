'use strict'

$('.open-modal').click(function() {
    event.preventDefault();

    let modalName = $(this).attr('data-modal');

    let modal = $('.modal-overlay[data-modal="'+ modalName +'"]');

    modal.fadeIn(500);
 
    $("body").css("overflow", "hidden");
});


const mailToDir = `
    <div class="modal-overlay" data-modal="mail-to-dir">
        <div class="modal-window">
            <a href="javascript:void(0)" class="modal-window__close-button">
                <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            </a>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                <input type="submit" class="button button_theme_gold" value="отправить" >
            </form>
        </div>
    </div>
`;

    
const orderService = `
    <div class="modal-overlay" data-modal="order-service">
        <div class="modal-window">
            <a href="javascript:void(0)" class="modal-window__close-button">
                <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            </a>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="заказать" >
            </form>
        </div>
    </div>
`;

const signToNews = `
    <div class="modal-overlay" data-modal="sign-to-news"> 
        <div class="modal-window">
            <a href="javascript:void(0)" class="modal-window__close-button">
                <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            </a>
            <h2 class="modal-window__title">Успешно</h2>
            <p class="modal-window__message">
                Теперь Вы подписаны на новости
            </p>
        </div>
    </div>
`;

const signToDemo = `
    <div class="modal-overlay" data-modal="sign-to-demo">
        <div class="modal-window">
            <a href="javascript:void(0)" class="modal-window__close-button">
                <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            </a>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться" >
            </form>
        </div>
    </div>
`;

const orderProject = `
    <div class="modal-overlay" data-modal="order-project">
        <div class="modal-window">
            <a href="javascript:void(0)" class="modal-window__close-button">
                <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            </a>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться" >
            </form>
        </div>
    </div>
`;

const orderSpecialist = `
    <div class="modal-overlay" data-modal="${this}">
        <div class="modal-window">
            <a href="javascript:void(0)" class="modal-window__close-button">
                <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            </a>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться" >
            </form>
        </div>
    </div>
`;

const callBack = `
    <div class="modal-overlay" data-modal="call-back">
        <div class="modal-window">
            <a href="javascript:void(0)" class="modal-window__close-button">
                <img src="images/close.svg" alt="закрыть" class="modal-window__close-icon">
            </a>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться" >
            </form>
        </div>
    </div>
`;


$('body').append(mailToDir);
$('body').append(orderService);
$('body').append(signToNews);
$('body').append(signToDemo);
$('body').append(orderProject);
$('body').append(orderSpecialist);
$('body').append(callBack);


$('.modal-window__close-button').click(function() {
    event.preventDefault();

    $(this).parent().parent().fadeOut(500);
    $("body").css("overflow", "auto");
});
