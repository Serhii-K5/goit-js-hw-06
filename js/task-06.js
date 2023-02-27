const txtInput = document.querySelector('#validation-input');

txtInput.addEventListener('blur', eventblur => {
    if (txtInput.dataset.length == eventblur.target.value.length) {
        txtInput.attributes('id') = 'hgej'
        txtInput.style.borderColor = 'red';
    }
    console.log(txtInput.dataset.length, eventblur.target.value.length)

})

console.dir(txtInput.dataset);

// console.log(textInput.getAttribute('data-length'))
// console.log(txtInput.length)