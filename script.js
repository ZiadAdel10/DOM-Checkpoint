'use strict';

let changeIcon = function (icon) {
  icon.classList.toggle('fa-solid');
};

const plus = document.querySelector('.plus-btn');
let minus = document.querySelector('.minus-btn');
let num = document.querySelector('.num');

console.log(num);
function totalClickminus(click) {
  const totalClicks = document.getElementById('totalClicksminus');
  const sumValue = parseInt(totalClicks.innerText) + click;
  totalClicks.innerText = sumValue;

  if (sumValue < 0) {
    totalClicks.innerText = 0;
  }
}

function totalClickplus(click) {
  const totalClicks = document.getElementById('totalClicksplus');
  const sumValue = parseInt(totalClicks.innerText) + click;
  totalClicks.innerText = sumValue;

  if (sumValue < 0) {
    totalClicks.innerText = 0;
  }
}

// var removeCartItemButtons = document.getElementsByClassName('Action-2');
// console.log(removeCartItemButtons);
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//   var button = removeCartItemButtons[i];
//   button.addEventListener('click', function (event) {
//     var buttonClicked = event.target;
// buttonClicked.parentElement.parentElement.removeChild(buttonClicked);
//   });
// }
