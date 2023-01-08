'use strict';
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  var removeCartItemBtn = document.getElementsByClassName('remove-btn');
  console.log(removeCartItemBtn);
  for (let i = 0; i < removeCartItemBtn.length; i++) {
    var button = removeCartItemBtn[i];
    button.addEventListener('click', removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName('quantity');
  for (let i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }

  var addToCartBtns = document.getElementsByClassName('cart-btn');
  for (let i = 0; i < addToCartBtns.length; i++) {
    var btn = addToCartBtns[i];
    btn.addEventListener('click', addToCartClicked);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var btn = event.target;
  var shopItem = btn.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('shoe-name')[0].innerText;
  var price = shopItem.getElementsByClassName('shoe-price')[0].innerText;
  var imgSrc = shopItem.getElementsByClassName('shoe-img-item')[0].src;

  addItemCart(title, price, imgSrc);
  updateCartTotal();
  quantityChanged();
}

function addItemCart(title, price, imgSrc) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('shoe-name');
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('This item is already in the cart');
      return;
    }
  }
  var cartRowContents = `  
  <div class="cart-img-box">
  <img
  src="${imgSrc}"
  class="cart-img"
  alt="Yellow Shoes"
  />
  <span class="cart-item-name">${title}</span>
  </div>
  <span class="cart-price">${price}</span>
  <div class="quantity-actions">
  <input
  class="quantity"
  type="number"
  value="1"
  />
  <p class="remove-btn">Remove</p>
  </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName('remove-btn')[0]
    .addEventListener('click', removeCartItem);
  cartRow
    .getElementsByClassName('quantity')[0]
    .addEventListener('change', updateCartTotal);
  cartRow
    .getElementsByClassName('quantity')[0]
    .addEventListener('change', quantityChanged);
}

let changeIcon = function (icon) {
  icon.classList.toggle('fa-solid');
};

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('quantity')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}
