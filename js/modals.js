'use strict'

var mailToDir = $('.modal-overlay[data-modal="mailToDir"]');

var orderService = $('.modal-overlay[data-modal="orderService"]');

var orderCalc = $('.modal-overlay[data-modal="orderCalc"]');

const signToNews = `
    <div class="modal-overlay" data-modal="signToNews"> 
        <div class="modal-window">
            <img src="/local/templates/nazgal/assets/images/close.svg" alt="закрыть" class="modal-window__close-icon">
            <h2 class="modal-window__title">Успешно</h2>
            <p class="modal-window__message">
                Теперь Вы подписаны на новости
            </p>
        </div>
    </div>
`;

var signToDemo = $('.modal-overlay[data-modal="signToDemo"]');

var orderProject = $('.modal-overlay[data-modal="orderProject"]');

var orderSpecialist = $('.modal-overlay[data-modal="orderSpecialist"]');

var callBack = $('.modal-overlay[data-modal="callBack"]');

const aboutDelivery = `
    <div class="modal-overlay" data-modal="aboutDelivery">
        <div class="modal-window">
        <img src="/local/templates/nazgal/assets/images/close.svg" alt="закрыть" class="modal-window__close-icon">
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
        <img src="/local/templates/nazgal/assets/images/close.svg" alt="закрыть" class="modal-window__close-icon">
        <h2 class="modal-window__title">Наш стенд в Экспострое</h2>
        <img src="/local/templates/nazgal/assets/images/expostroy.jpg" class="contacts-column-img" alt="стенд в Экспострое">
    </div>
</div>
`;


const downloadBlueprints = `
<div class="modal-overlay" data-modal="downloadBlueprints">
    <div class="modal-window">
        <img src="/local/templates/nazgal/assets/images/close.svg" alt="закрыть" class="modal-window__close-icon">
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
        <img src="/local/templates/nazgal/assets/images/close.svg" alt="закрыть" class="modal-window__close-icon">
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

var remind = $('.modal-overlay[data-modal="remind"]');

var enter = $('.modal-overlay[data-modal="enter"]');

var register = $('.modal-overlay[data-modal="register"]');

$('.open-modal').click(function() {
    event.preventDefault();

    let modalName = $(this).attr('data-modal');

    switch(modalName) {
        case 'remind':
            $('.body').append(remind);
            callModalRemind();
            callModalEnter();
            callModalRegister();
            doRemind();
            break
        case 'enter':
            $('.body').append(enter);
            callModalRemind();
            callModalEnter();
            callModalRegister();
            doEnter();
            break
        case 'register':
            $('.body').append(register);
            callModalRemind();
            callModalEnter();
            callModalRegister();
            doRegister();
            break
        case 'callBack':
            $('.body').append(callBack);
            doCallBack();
            break
        case 'mailToDir':
            $('.body').append(mailToDir); 
            sendMailToDir();
            break
        case 'orderService':
            $('.body').append(orderService);
            doService($(this));
            break
        case 'orderCalc':
            $('.body').append(orderCalc);
            doCalc($(this));
            break
        case 'signToNews':
            $('.body').append(signToNews);
            break
        case 'signToDemo':
            $('.body').append(signToDemo);
            doAudition();
            break
        case 'orderProject':
            $('.body').append(orderProject);
            doProject();
            break
        case 'orderSpecialist':
            $('.body').append(orderSpecialist);
            doSpecialist();
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

    $('.modal-overlay[data-modal="' + modalName + '"]').fadeIn(500);

    $(".body").css("overflow", "hidden");

    $('.modal-window__close-icon').click(function() {

        $(this).parent().parent().fadeOut(500);
        setTimeout(function() {
            $('.modal-overlay').remove();
        }, 500);

        $(".body").css("overflow", "auto");
    });

    jQuery(function ($) {
        $('input[type="tel"]').each(function () {
            $(this).mask('9 (999) 999-99-99');
        });

        $('input.project-calc__square-input').each(function () {
            $(this).mask('9?999');
        });
    });
});


function callModalRemind() {
    if ($('#callModalRemind').length) {
        $('#callModalRemind').on('click', function () {
            if ($('.linkRemind').length) {
                $('.modal-overlay').remove();
                $('.linkRemind').click();
            }
        });
    }
}

function callModalEnter() {
    if ($('#callModalEnter').length) {
        $('#callModalEnter').on('click', function () {
            if ($('.linkEnter').length) {
                $('.modal-overlay').remove();
                $('.linkEnter').click();
            }
        });
    }
}

function callModalRegister() {
    if ($('#callModalRegister').length) {
        $('#callModalRegister').on('click', function () {
            if ($('.linkRegister').length) {
                $('.modal-overlay').remove();
                $('.linkRegister').click();
            }
        });
    }
}

// директору
function sendMailToDir() {

    var form$ = $(mailToDir).find('form');

    form$.show();
    $('#msg-director-success').html('');
    $('#msg-director-error').html('');

    //$(mailToDir).find('form input[type="submit"]').click(function (e) {
    form$.on('submit', function (e) {
        e.preventDefault();

        //var form$ = $(mailToDir).find('form');
        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'director',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'comment': form$.find('textarea[name=comment]').val(),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'g_recaptcha_response': $('#director-google-recaptcha .g-recaptcha-response').val(),
            'director-signedstring': form$.find('input[name=director-signedstring]').val()
        };

        form$.hide();
        $('#msg-director-success').html('');
        $('#msg-director-error').html('');

        $.ajax({
            url: '/local/components/task.ajax/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-director-success').text(data.msg);
                } else {
                    $('#msg-director-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-director-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}

// обратный звонок
function doCallBack() {

    var form$ = $(callBack).find('form');

    form$.show();
    $('#msg-callback-success').html('');
    $('#msg-callback-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'callback',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'comment': form$.find('input[name=comment]').val(),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'g_recaptcha_response': $('#callback-google-recaptcha .g-recaptcha-response').val(),
            'callback-signedstring': form$.find('input[name=callback-signedstring]').val()
        };

        form$.hide();
        $('#msg-callback-success').html('');
        $('#msg-callback-error').html('');

        $.ajax({
            url: '/local/components/task.ajax/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-callback-success').text(data.msg);
                } else {
                    $('#msg-callback-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-callback-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}

function getCalcOptions() {

    var calc_options = '';

    if ($('.project-calc__checkbox-row').length) {
        $('.project-calc__checkbox-row').each(function () {
            if ($(this).find('input[type=checkbox]').is(':checked')) {
                calc_options = calc_options + '\n' + $(this).find('label').text();
            }
        });
    }

    return calc_options;
}

// заказать расчет
function doCalc(fromObj) {

    var form$ = $(orderCalc).find('form');

    form$.show();
    $('#msg-calc-success').html('');
    $('#msg-calc-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'calc',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'comment': form$.find('input[name=comment]').val(),
            'service_name': $(fromObj).data('service-name'),
            'service_cost': $(fromObj).data('service-cost'),
            'calc_room_type': $('a.project-calc__radio-elem_active').text(),
            'calc_room_square': $('input.project-calc__square-input').val(),
            'calc_options': getCalcOptions(),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'g_recaptcha_response': $('#calc-google-recaptcha .g-recaptcha-response').val(),
            'calc-signedstring': form$.find('input[name=calc-signedstring]').val()
        };

        form$.hide();
        $('#msg-calc-success').html('');
        $('#msg-calc-error').html('');

        $.ajax({
            url: '/local/components/task.ajax/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-calc-success').text(data.msg);
                } else {
                    $('#msg-calc-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-calc-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}

// заказать услугу
function doService(fromObj) {

    var form$ = $(orderService).find('form');

    form$.show();
    $('#msg-service-success').html('');
    $('#msg-service-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'service',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'comment': form$.find('input[name=comment]').val(),
            'service-name': $(fromObj).data('service-name'),
            'service-cost': $(fromObj).data('service-cost'),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'g_recaptcha_response': $('#service-google-recaptcha .g-recaptcha-response').val(),
            'service-signedstring': form$.find('input[name=service-signedstring]').val()
        };

        form$.hide();
        $('#msg-service-success').html('');
        $('#msg-service-error').html('');

        $.ajax({
            url: '/local/components/task.ajax/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-service-success').text(data.msg);
                } else {
                    $('#msg-service-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-service-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}

// запись в демо-зал
function doAudition() {

    var form$ = $(signToDemo).find('form');

    form$.show();
    $('#msg-audition-success').html('');
    $('#msg-audition-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'audition',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'comment': form$.find('input[name=comment]').val(),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'g_recaptcha_response': $('#audition-google-recaptcha .g-recaptcha-response').val(),
            'audition-signedstring': form$.find('input[name=audition-signedstring]').val()
        };

        form$.hide();
        $('#msg-audition-success').html('');
        $('#msg-audition-error').html('');

        $.ajax({
            url: '/local/components/task.ajax/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-audition-success').text(data.msg);
                } else {
                    $('#msg-audition-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-audition-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}

// заказать проект
function doProject() {

    var form$ = $(orderProject).find('form');

    form$.show();
    $('#msg-project-success').html('');
    $('#msg-project-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'project',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'comment': form$.find('input[name=comment]').val(),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'g_recaptcha_response': $('#project-google-recaptcha .g-recaptcha-response').val(),
            'project-signedstring': form$.find('input[name=project-signedstring]').val()
        };

        form$.hide();
        $('#msg-project-success').html('');
        $('#msg-project-error').html('');

        $.ajax({
            url: '/local/components/task.ajax/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-project-success').text(data.msg);
                } else {
                    $('#msg-project-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-project-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}

// выезд специалиста
function doSpecialist() {

    var form$ = $(orderSpecialist).find('form');

    form$.show();
    $('#msg-specialist-success').html('');
    $('#msg-specialist-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'specialist',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'comment': form$.find('input[name=comment]').val(),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'g_recaptcha_response': $('#specialist-google-recaptcha .g-recaptcha-response').val(),
            'specialist-signedstring': form$.find('input[name=specialist-signedstring]').val()
        };

        form$.hide();
        $('#msg-specialist-success').html('');
        $('#msg-specialist-error').html('');

        $.ajax({
            url: '/local/components/task.ajax/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-specialist-success').text(data.msg);
                } else {
                    $('#msg-specialist-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-specialist-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}

// подписка
function doSubscription() {

    var form$ = $('form.subscribe__form');

    if (form$.length) {

        form$.show();
        $('#msg-subscription-success').html('');
        $('#msg-subscription-error').html('');

        form$.on('submit', function (e) {
            e.preventDefault();

            var form$ = $(this);
            var postData = {
                'sessid': BX.bitrix_sessid(),
                'action': 'subscribe',
                'email': form$.find('input[name=email]').val(),
                'subscription-signedstring': form$.find('input[name=subscription-signedstring]').val()
            };

            form$.hide();
            $('#msg-subscription-success').html('');
            $('#msg-subscription-error').html('');

            $.ajax({
                url: '/local/components/subscription.line/ajax.php',
                dataType: 'json',
                type: 'post',
                data: postData,
                success: function(data) {
                    if (data.success == true) {
                        $('#msg-subscription-success').text(data.msg);
                        if (data.userInfo != undefined) {
                            document.location.reload(true);
                        }
                    } else {
                        $('#msg-subscription-error').text(data.error);
                        form$.show();
                    }
                },
                fail: function() {
                    $('#msg-subscription-error').text('Что-то пошло не так..');
                    form$.show();
                }
            });

            return false;
        });
    }
}
doSubscription();

// напомнить
function doRemind() {

    var form$ = $(remind).find('form');

    form$.show();
    $('#msg-remind-success').html('');
    $('#msg-remind-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'remind',
            'email': form$.find('input[name=email]').val(),
            'remind-signedstring': form$.find('input[name=remind-signedstring]').val()
        };

        form$.hide();
        $('#msg-remind-success').html('');
        $('#msg-remind-error').html('');

        $.ajax({
            url: '/local/components/bitrix/system.auth.authorize/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-remind-success').text(data.msg);
                } else {
                    $('#msg-remind-error').text(data.error);
                    form$.show();
                }
            },
            fail: function() {
                $('#msg-remind-error').text('Что-то пошло не так..');
                form$.show();
            }
        });

        return false;
    });
}

// вход
function doEnter() {

    var form$ = $(enter).find('form');

    form$.show();
    $('#msg-enter-success').html('');
    $('#msg-enter-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'enter',
            'login': form$.find('input[name=email]').val(),
            'password': form$.find('input[name=password]').val(),
            'remember': form$.find('input[name=remember]').prop('checked'),
            'enter-signedstring': form$.find('input[name=enter-signedstring]').val()
        };

        form$.hide();
        $('#msg-enter-success').html('');
        $('#msg-enter-error').html('');

        $.ajax({
            url: '/local/components/bitrix/system.auth.authorize/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-enter-success').text(data.msg);
                    document.location.reload(true);
                } else {
                    $('#msg-enter-error').text(data.error);
                    form$.show();
                }
            },
            fail: function() {
                $('#msg-enter-error').text('Что-то пошло не так..');
                form$.show();
            }
        });

        return false;
    });
}

// регистрация
function doRegister() {

    var form$ = $(register).find('form');

    form$.show();
    $('#msg-register-success').html('');
    $('#msg-register-error').html('');

    form$.on('submit', function (e) {
        e.preventDefault();

        var form$ = $(this);
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': 'register',
            'name': form$.find('input[name=name]').val(),
            'phone': form$.find('input[name=phone]').val(),
            'email': form$.find('input[name=email]').val(),
            'password': form$.find('input[name=password]').val(),
            'agree': form$.find('input[name=agree]').prop('checked'),
            'subscribe_mail': form$.find('input[name=subscribe-mail]').prop('checked'),
            'register-signedstring': form$.find('input[name=register-signedstring]').val(),
            'g_recaptcha_response': $('#register-google-recaptcha .g-recaptcha-response').val(),
        };

        form$.hide();
        $('#msg-register-success').html('');
        $('#msg-register-error').html('');

        $.ajax({
            url: '/local/components/bitrix/system.auth.authorize/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    $('#msg-register-success').text(data.msg);
                    document.location.reload(true);
                } else {
                    $('#msg-register-error').text(data.error);
                    form$.show();
                }
                grecaptcha.reset();
            },
            fail: function() {
                $('#msg-register-error').text('Что-то пошло не так..');
                grecaptcha.reset();
                form$.show();
            }
        });

        return false;
    });
}
