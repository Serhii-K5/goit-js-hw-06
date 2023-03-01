const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arr = [];

//v1
ingredients.forEach(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('.item');
  arr.push(li);
});

// v2
// ingredients.map(ingredient => {
//     let li = document.createElement('li');
//     li.textContent = ingredient;
//     li.classList.add('.item');
//     arr.push(li);
//  })
//  .join('');

list.append(...arr);
