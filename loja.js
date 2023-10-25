const cart = document.querySelector("#cart");
const close_cart = document.querySelector("#close-cart");
const open_cart = document.querySelector("#card_open");

open_cart.addEventListener("click", menuisVisile);
close_cart.addEventListener("click", menuisVisile);

const buy_Button = document
  .querySelector("#buy")
  .addEventListener("click", () => {
    const error_Button = document.querySelector("#danger");
    const value = document.querySelector(".total p").textContent;
    console.log(value);
    if (value === "TOTAL : R$0,00") {
      error_Button.classList.add("alert.active");
      setTimeout(() => {
        error_Button.classList.remove("alert.active");
      }, 2500);
    } else {
      alert("Obrigado pela compra, volte sempre!");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const cartContent = document.querySelector(".cart-content");
    cartContent.addEventListener("click", function (event) {
      if (event.target.id === "remove-item") {
        removeProduct(event);
      }
    });
  });

const remove_to_card = document.querySelectorAll("#remove-item");
for (var i = 0; i < remove_to_card.length; i++) {
  remove_to_card[i].addEventListener("click", removeProduct);
}
function removeProduct(event) {
  const alertButton = document.querySelector("#sucess");
  let container = event.target;
  while (container && !container.classList.contains("product-container")) {
    container = container.parentElement;
    
  }
  if (container) {
    container.remove();
    alertButton.classList.add("alert.active");
    setTimeout(() => {
      alertButton.classList.remove("alert.active");
    }, 2000);
    updateTotal();
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
  if (cart.classList.contains("shopping-cart-hidden")) {
    cart.classList.remove("shopping-cart-hidden");
    cart.classList.add("shopping-cart");
  } else {
    cart.classList.add("shopping-cart-hidden");
    cart.classList.remove("shopping-cart");
  }
}
function menuDefinitive() {
  cart.classList.add("shopping-cart");
  cart.classList.remove("shopping-cart-hidden");
}

const add_to_card = document.querySelectorAll(".Button");
for (var i = 0; i < add_to_card.length; i++) {
  add_to_card[i].addEventListener("click", addProductToCart);
}

function addProductToCart(event) {
  menuDefinitive();
  const button = event.target;
  const productInfos = button.parentElement.parentElement;
  productImage = productInfos.querySelector("img").src;
  productTitle = productInfos.querySelector(".title").textContent;
  productPrice = productInfos.querySelector(".price").textContent;

  let newCardProduct = document.createElement("div");
  newCardProduct.classList.add("product-container");
  newCardProduct.innerHTML = `
    
  <div class="product-image"><img src="${productImage}" alt="${productTitle}"></div>
  <div class="product-infos">
    <div class="product-title"><p>${productTitle}</p></div>
  <div class="product-price"><p>${productPrice}</p></div>
  <button type="button" class="btn btn-danger" id="remove-item">Remover produto</button>
</div> 
`;
  const cart = document.querySelector(".cart-content");
  const totalElement = document.querySelector(".total");
  cart.insertBefore(newCardProduct, totalElement);
  updateTotal();
}
updateTotal();
