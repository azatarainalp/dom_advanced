let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');



// Got html elements 

  

// console.log($product[0].innerHTML);
// console.log(quantity);
// console.log(subtot);


function updateSubtot($cart) {
  // Iteration 1.1 Updates the subtotal value for each product
  let $product = $cart.querySelectorAll('.pu span'); //gets the product span
  let quantity = $cart.querySelectorAll('.qty input'); //gets the quantity input 
  let subtot = $cart.querySelectorAll('.subtot span');   //gets the subtot span
  let total = 0;
  

  for( let i = 0; i < $product.length; i++){
    let price = parseFloat($product[i].innerHTML); //gets the inner value of the product span
    let qty = parseFloat(quantity[i].value); //se usa .value para traer el valor del input
    let subtotal = subtot[i]; //gets the subtotal for each iteration
    let totalhtml = document.querySelector('#total span'); //gets the reference for total in the html 

    let subtotal_res = qty *  price; 

    subtotal.innerHTML = `${subtotal_res}`; //displays the subtotal value for each product in the html 
    total = total + subtotal_res; //calculates the total 

    totalhtml.innerHTML = `${total}`;//displays the total value in the html 

  }//for


}//updateSubtot


function calcAll() {
  // Iteration 1.2
  updateSubtot($cart);

}//calcAll
$calc.onclick = calcAll;


let del = $cart.querySelectorAll('.btn-delete');

console.log(del[0]);

let prodrow = $cart.querySelectorAll('.product');

console.log(prodrow[0]);


function remove(e){

    // $cart.removeChild(prodrow[i]);
    let row = e.currentTarget.parentNode.parentNode;
    $cart.removeChild(row);
    console.log(row);
    // console.log(e);
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.parentNode);

}//remove


for(let i = 0; i < del.length; i++){
  del[i].onclick = remove;
}//for 



let createButton = document.getElementById('create');
let newProduct = document.getElementById('new-product');
let newPrice = document.getElementById('new-price');

console.log(createButton);
console.log(newProduct);
console.log(newPrice);




function addNewProduct(){
  let newRow =$cart.insertRow();
  let newProd = newProduct.value;
  let newPri = parseFloat(newPrice.value);
  newRow.innerHTML = `<tr class="product">
  <td class="name">
    <span>${newProd}</span>
  </td>

  <td class="pu">
    $<span>${newPri}</span>
  </td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0">
    </label>
  </td>

  <td class="subtot">
    $<span>0</span>
  </td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>`
  console.log(newProd);
  console.log(newPri);
  let del = newRow.querySelector('.btn-delete');
  del.onclick = remove;

}//addNewProduct



createButton.onclick = addNewProduct;