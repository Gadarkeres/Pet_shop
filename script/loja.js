const cart = document.querySelector('#cart')
const close_cart = document.querySelector('#close-cart')
const open_cart = document.querySelector('#card_open')
const add_to_card = document.querySelectorAll('.button button');
const remove_to_card = document.getElementsByClassName('remove-item')


open_cart.addEventListener("click", menuisVisile);
close_cart.addEventListener("click", menuisVisile)


for(var i = 0; i < remove_to_card.length; i++){
    remove_to_card[i].addEventListener('click', function(event){
       event.target.parentElement.remove()
        
    })
}


for(var i = 0; i < add_to_card.length; i++){
    add_to_card[i]
}



function menuisVisile() {
    if (cart.classList.contains('shopping-cart-hidden')){
        cart.classList.remove('shopping-cart-hidden')
        cart.classList.add('shopping-cart')
    }  else{
        cart.classList.add('shopping-cart-hidden')
        cart.classList.remove('shopping-cart')   
    }
   
}