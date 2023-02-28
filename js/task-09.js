function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

btnChangeColor.addEventListener('click', () => 
  body.style.backgroundColor = spanColor.textContent = getRandomHexColor()
)
