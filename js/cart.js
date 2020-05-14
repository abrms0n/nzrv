const cart = document.querySelector('.cart-box__products');

if ($(cart).length) {
    cart.addEventListener('click', function(event) {
        if (event.target.classList.contains('icon-plus')) {
            event.target.closest('.cart-item').querySelector('input').value++;
        }
    })

    cart.addEventListener('click', function(event) {
        if (event.target.classList.contains('icon-minus')  && event.target.closest('.cart-item').querySelector('input').value > 1 ) {
            event.target.closest('.cart-item').querySelector('input').value--;
        }
    })
}