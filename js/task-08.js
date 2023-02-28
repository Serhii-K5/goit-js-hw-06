
const form = document.querySelector(".login-form");

form.addEventListener("submit", eventSubmit => {
  eventSubmit.preventDefault();   // відміна дії за замовченням

  const {elements: { email, password },} = eventSubmit.currentTarget;

  if (email.value === "") {
    return alert('Field "email" not filled!');
  }
  if (password.value === "") {
    return alert('Field "password" not filled!');
  }

  console.log({ email: email.value, password: password.value });

  eventSubmit.currentTarget.reset(); 
});
