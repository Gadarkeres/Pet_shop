const cart = document.querySelector('#cart')
const close_cart = document.querySelector('#close-cart')
const open_cart = document.querySelector('#card_open')
const numberProducts = document.querySelector('#card-number strong')
let number_cart = 2
numberProducts.innerText = number_cart


open_cart.addEventListener("click", menuisVisile);
close_cart.addEventListener("click", menuisVisile)

const cartContent = document.querySelector('.cart-content');
cartContent.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-item')) {
    removeProduct(event);
  }
});


function removeProduct(event){
        let container = event.target;
        while (container && !container.classList.contains('product-container')) {
            container = container.parentElement;
        }
        if (container) {
            number_cart --
            container.remove();
            updateTotal();
            numberProducts.innerText = number_cart
        }
}

function updateTotal() {
  let totalAmount = 0;
  const productsDetails = document.getElementsByClassName("product-infos");
  for (var i = 0; i < productsDetails.length; i++) {
    const productPrice = parseFloat(
      productsDetails[i]
        .getElementsByClassName("product-price")[0]
        .innerText.replace("R$", "")
        .replace(",", ".")
    );
    totalAmount = totalAmount += productPrice;
  }

  const total = document.querySelector(".total p");
  totalAmount = totalAmount.toFixed(2);
  totalAmount = totalAmount.replace(".", ",");
  total.innerText = `TOTAL : R$${totalAmount}`;
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
function menuDefinitive(){
    cart.classList.add('shopping-cart')
    cart.classList.remove('shopping-cart-hidden')
}

const add_to_card = document.querySelectorAll('.Button');
for(var i = 0; i < add_to_card.length; i++){
    add_to_card[i].addEventListener('click', addProductToCart)
}

function addProductToCart(event){
  numberProducts.innerText = number_cart;
    number_cart ++
    numberProducts.innerText = number_cart
    menuDefinitive()
    const button = event.target
    const productInfos = button.parentElement.parentElement
    productImage = productInfos.querySelector('img').src
    productTitle = productInfos.querySelector('.title').textContent
    productPrice = productInfos.querySelector('.price').textContent

    let newCardProduct = document.createElement("div")
    newCardProduct.classList.add('product-container')
    newCardProduct.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="remove-item" style="position: absolute; right: 15px; cursor:pointer;" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
  </svg>
  <div class="product-image"><img src="${productImage}" alt="${productTitle}"></div>
  <div class="product-infos">
    <div class="product-title"><p>${productTitle}</p></div>
  <div class="product-price"><p>${productPrice}</p></div>
</div> `

const removeButton = newCardProduct.querySelector('.remove-item');
removeButton.addEventListener('click', removeProduct);
const cart = document.querySelector('.cart-content');
const totalElement = document.querySelector('.total');
cart.insertBefore(newCardProduct, totalElement);
updateTotal();
 
}
updateTotal()