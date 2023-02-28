function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputTxt = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

const createBoxes = amount => {
	const arrDiv = [];
  for (let number = 0; number < amount; number++) {
		const divEl = document.createElement('div');
    divEl.style.height = divEl.style.width = (30 + 10 * number) + 'px';
		divEl.style.background = getRandomHexColor();
		arrDiv.push(divEl);
	}
	return arrDiv;
}

btnCreate.addEventListener('click', () => 
  boxesDiv.append(...createBoxes(inputTxt.value))
);

btnDestroy.addEventListener('click', () => boxesDiv.innerHTML = '');
