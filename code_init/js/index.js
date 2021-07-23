let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');


// Got html elements 



// console.log($product);
// console.log(quantity);
// console.log(typeof(subtot));


function updateSubtot($cart) {
  // Iteration 1.1
  let $product = parseFloat($cart.querySelector('.pu span').innerHTML);
  let quantity = parseFloat($cart.querySelector('.qty input').value);
  let subtot = parseFloat($cart.querySelector('.subtot span').innerHTML);
  let subtotSpan = $cart.querySelector('.subtot span');

  subtot = quantity *  $product;

  subtotSpan.innerHTML = `${subtot}`;
  

  
}

function calcAll() {
  // Iteration 1.2
  updateSubtot($cart);
}
$calc.onclick = calcAll;