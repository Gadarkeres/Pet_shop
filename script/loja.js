const cart = document.querySelector('#cart')
const close_cart = document.querySelector('#close-cart')
const open_cart = document.querySelector('#card_open')

open_cart.addEventListener("click", menuisVisile);
close_cart.addEventListener("click", menuisVisile)

function menuisVisile() {
    if (cart.classList.contains('shopping-cart-hidden')){
        cart.classList.remove('shopping-cart-hidden')
        cart.classList.add('shopping-cart')
    }  else{
        cart.classList.add('shopping-cart-hidden')
        cart.classList.remove('shopping-cart')   
    }
   
}