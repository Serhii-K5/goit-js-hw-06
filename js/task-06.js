const txtInput = document.querySelector('#validation-input');

txtInput.addEventListener('blur', eventBlur => {
  txtInput.classList.remove('valid');
  txtInput.classList.remove('invalid');

  if (eventBlur.target.value !== "") {
    //v1
    txtInput.classList.add((parseInt(txtInput.dataset.length) === eventBlur.target.value.length) ? "valid" : "invalid");    
    //v2
    // txtInput.classList.add((+txtInput.dataset.length === eventBlur.target.value.length) ? "valid" : "invalid");  
  }
})
