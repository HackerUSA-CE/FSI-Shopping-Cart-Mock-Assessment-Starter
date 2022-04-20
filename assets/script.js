

const up = document.querySelector('#quantity-up')
const down = document.querySelector('#quantity-down')
let quantity = document.querySelector('.number')
let total = document.querySelector('.total-quantity')

quantity = 1



down.addEventListener('click', function() 
{


if (quantity > 0) {

quantity--
       
}

total.textContent =   'Quantity: ' + quantity


})

up.addEventListener('click', function(){

quantity++

total.textContent = 'Quantity: ' + quantity



} )