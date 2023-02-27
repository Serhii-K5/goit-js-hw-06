const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('.item');
  list.appendChild(li);
});
