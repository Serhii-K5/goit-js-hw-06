
const items = document.querySelectorAll('.item');
console.log('Number of categories:', items.length);

// v1
items.forEach(el => {
  console.log('');
  console.log('Category:', el.querySelector('h2').textContent);
  console.log('Elements:',  el.querySelectorAll('li').length);
});

// // v2
// console.log("Number of categories: ", document.querySelectorAll(".item").length);

// document.querySelectorAll("li.item").forEach((elem) => {
//   console.log("");
//   console.log("Category: ", elem.firstElementChild.textContent);
//   // console.log('Elements: ', elem.querySelectorAll("li").length);
//   console.log("Elements: ", elem.lastElementChild.children.length);
// });

