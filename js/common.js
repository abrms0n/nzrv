BX.namespace('BX.CommonComponent');

(function() {
    BX.CommonComponent = {
        BXFormPosting: false,
 
        init: function(parameters)
        {
            this.templateFolder = parameters.templateFolder || '/local/templates/nazgal';

            this.CartSuccess = new BX.PopupWindow("add_basket-success", null, {
                    content: '<div id="mainshadow"></div>'+'<h3>Товар успешно добавлен в корзину</h3><br/><span id="msg-cart-success"></span>',
                    closeIcon: {right: "20px", top: "10px"},
                    titleBar: {content: BX.create("span", {html: '', 'props': {'className': 'access-title-bar'}})},
                    zIndex: 0,
                    offsetLeft: 0,
                    offsetTop: 0,
                    draggable: {restrict: false},
                    overlay: {backgroundColor: 'black', opacity: '80' },  /* затемнение фона */
                    buttons: [
                        new BX.PopupWindowButton({
                            text: "Перейти в корзину",
                            className: "popup-window-button-accept",
                            events: {click: function(){
                                location.href="/personal/cart/";
                            }}
                        }),
                        new BX.PopupWindowButton({
                            text: "Продолжить покупки",
                            className: "webform-button-link-cancel",
                            events: {click: function(){
                                this.popupWindow.close(); // закрытие окна
                            }}
                        })
                    ]
            });

            this.CartError = new BX.PopupWindow("add_basket-error", null, {
                    content: '<div id="mainshadow"></div>'+'<h3>Не удалось добавить товар в корзину</h3><br/><span id="msg-cart-error"></span>',
                    closeIcon: {right: "20px", top: "10px"},
                    titleBar: {content: BX.create("span", {html: '', 'props': {'className': 'access-title-bar'}})},
                    zIndex: 0,
                    offsetLeft: 0,
                    offsetTop: 0,
                    draggable: {restrict: false},
                    overlay: {backgroundColor: 'black', opacity: '80' },  /* затемнение фона */
                    buttons: [
                        new BX.PopupWindowButton({
                            text: "Продолжить покупки",
                            className: "webform-button-link-cancel",
                            events: {click: function(){
                                this.popupWindow.close(); // закрытие окна
                            }}
                        })
                    ]
            });

            this.FavouritesSuccess = new BX.PopupWindow("add_favourites-success", null, {
                    content: '<div id="mainshadow"></div>'+'<h3>Товар успешно добавлен в список избранного</h3><br/><span id="msg-favourites-success"></span>',
                    closeIcon: {right: "20px", top: "10px"},
                    titleBar: {content: BX.create("span", {html: '', 'props': {'className': 'access-title-bar'}})},
                    zIndex: 0,
                    offsetLeft: 0,
                    offsetTop: 0,
                    draggable: {restrict: false},
                    overlay: {backgroundColor: 'black', opacity: '80' },  /* затемнение фона */
                    buttons: [
                        new BX.PopupWindowButton({
                            text: "Перейти в список избранного",
                            className: "popup-window-button-accept",
                            events: {click: function(){
                                location.href="/personal/";
                            }}
                        }),
                        new BX.PopupWindowButton({
                            text: "Продолжить покупки",
                            className: "webform-button-link-cancel",
                            events: {click: function(){
                                this.popupWindow.close(); // закрытие окна
                            }}
                        })
                    ]
            });

            this.FavouritesError = new BX.PopupWindow("add_favourites-error", null, {
                    content: '<div id="mainshadow"></div>'+'<h3>Не удалось добавить товар в список избранного</h3><br/><span id="msg-favourites-error"></span>',
                    closeIcon: {right: "20px", top: "10px"},
                    titleBar: {content: BX.create("span", {html: '', 'props': {'className': 'access-title-bar'}})},
                    zIndex: 0,
                    offsetLeft: 0,
                    offsetTop: 0,
                    draggable: {restrict: false},
                    overlay: {backgroundColor: 'black', opacity: '80' },  /* затемнение фона */
                    buttons: [
                        new BX.PopupWindowButton({
                            text: "Продолжить покупки",
                            className: "webform-button-link-cancel",
                            events: {click: function(){
                                this.popupWindow.close(); // закрытие окна
                            }}
                        })
                    ]
            });
        }
    };
})();

$(document).ready(function() {

    $('.add2basket').on('click', function() {

        product_id = $(this).data('id');
        //product_id = 126; // TEST cart error
        postData = {
            'sessid': BX.bitrix_sessid(),
            'action': $(this).data('action'),
            'product_id': product_id,
            'add_service': $(document).find('#order-setup').prop('checked')
        };

        $('a.add2basket[data-id="'+ product_id +'"]').parent().parent().find('.loader').html(
            BX.create('IMG', {props: {src: BX.CommonComponent.templateFolder + '/assets/images/loader.gif', style: 'width: 18px;'}})
        );

        $.ajax({
            url: '/local/components/bitrix/sale.basket.basket/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                //console.log(data); // TEST cart
                if (data.success == true) {
                    $('#msg-cart-success').html('<img src="'+ data.productInfo.picture + '">' + data.productInfo.name);
                    BX.CommonComponent.CartSuccess.show();
                } else {
                    $('#msg-cart-error').text(data.error);
                    BX.CommonComponent.CartError.show();
                }
                $('a.add2basket[data-id="'+ product_id +'"]').parent().parent().find('.loader').html('');
            },
            fail: function() {
                $('a.add2basket[data-id="'+ product_id +'"]').parent().parent().find('.loader').html('');
            }
        });
    });

    $('.fav').on('click', function() {

        var reload = $(this).data('reload');
        var product_id = $(this).data('id');
        var postData = {
            'sessid': BX.bitrix_sessid(),
            'action': $(this).data('action'),
            'id': product_id,
        };

        $('.fav[data-id="'+ product_id +'"]').parent().find('.fav-loader').html(
            BX.create('IMG', {props: {src: BX.CommonComponent.templateFolder + '/assets/images/loader.gif', style: 'width: 18px;'}})
        );

        $.ajax({
            url: '/local/components/bitrix/catalog.fav/ajax.php',
            dataType: 'json',
            type: 'post',
            data: postData,
            success: function(data) {
                if (data.success == true) {
                    if (data.productInfo != undefined) {
                        $('.fav[data-id="'+ product_id +'"] .fav-icon').addClass('icon-star-filled').removeClass('icon-star-empty');
                        $('.fav[data-id="'+ product_id +'"]').data('action', 'delete');
                        $('#msg-favourites-success').html('<img src="'+ data.productInfo.picture + '">' + data.productInfo.name);
                        BX.CommonComponent.FavouritesSuccess.show();
                    } else {
                        $('.fav[data-id="'+ product_id +'"] .fav-icon').addClass('icon-star-empty').removeClass('icon-star-filled');
                        $('.fav[data-id="'+ product_id +'"]').data('action', 'add');
                    }
                } else {
                    if (postData.action != 'delete') {
                        $('#msg-favourites-error').text(data.error);
                        BX.CommonComponent.FavouritesError.show();
                    }
                }
                $('.fav[data-id="'+ product_id +'"]').parent().find('.fav-loader').html('');
                if (reload != undefined && reload == true) {
                    document.location.reload(true);
                }
            },
            fail: function() {
                $('.fav[data-id="'+ product_id +'"]').parent().find('.fav-loader').html('');
            }
        });
    });

});