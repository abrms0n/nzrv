

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

