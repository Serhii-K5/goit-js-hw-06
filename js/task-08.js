
const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);



// const btn = document.querySelector('button')

// alert("All input fields must be filled");

// const formElements = document.querySelectorAll(".login-form");
const inputs = document.querySelectorAll("input");
form.addEventListener("submit", console.log(inputs[0].form[0].value));

console.dir(inputs[0].form[0].value);
inputs.forEach(el => {
  const obj = { elements: el.name };
  // obj.email = 'ghfggj';
  // obj.password = 'fdjghsk';
  // form.getElementById("email");
  // el.name.forEach(el1 => console.log(el1.currentTarget)
    // const newObj = { elements: { el1 }, };
  
    // const userDetails = { email: email.value, Password: password.value };
    // console.log(obj);
  // )
  // console.log(el.name, newObj);
})

// const formTypies = formElements.querySelectorAll();
// console.log(formElements);
// console.dir(formElements);



// formElements.forEach(el => {
//   // console.log(typeof el.childNodes);
//   // console.log(document.getElementById("name").nodeName);
//   el.forEach(el1 => (console.log(el1.nodeName)));

//   // userDate.name = el.elements.name;
// });

// txtInput.addEventListener(
//   "input",
//   (eventInput) =>
//     (txtSpan.textContent =
//       eventInput.target.value === "" ? "Anonymous" : eventInput.target.value)
// );



// const userDate = new Object();

// formElements.forEach(el, () => {
//   userDate.name = el.elements.name;
// });



// const form = document.querySelector(".login-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }
//   const userDetails = { email: email.value, Password: password.value };

//   console.log(userDetails);
//   event.currentTarget.reset();
// }