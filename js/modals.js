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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться" >
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться" >
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
                <iframe class="modal-window__capcha" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LemTkAUAAAAACg5dyAXZuXgApXDQ75LlwoR-kG8&amp;co=aHR0cHM6Ly9zdC1wZXRlcnNidXJnLnB1bHQucnU6NDQz&amp;hl=ru&amp;v=P6KLRNy7h3K160ZmYNUOAce7&amp;theme=light&amp;size=normal&amp;cb=ua1q403wsru2" width="304" height="78" role="presentation" name="a-cj2vant6o2oz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            <input type="submit" class="button button_theme_gold" value="записаться">
            </form>
        </div>
    </div>
`;


const aboutDelivery = `
    <div class="modal-overlay" data-modal="callBack">
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



