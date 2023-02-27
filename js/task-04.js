
let counterValue = 0;
const valueEl = document.querySelector('#value');
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

btnDec.addEventListener('click', () => valueEl.textContent = (counterValue -= 1));
btnInc.addEventListener('click', () => valueEl.textContent = (counterValue += 1));
