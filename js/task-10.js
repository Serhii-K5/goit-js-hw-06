function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputTxt = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

const createBoxes = (amount) => {
	destroyBoxes();
  const arrDiv = [];
  for (let number = 0; number < amount; number++) {
    //для ефекту додавання закомитити строку нижче
    const divEl = document.createElement("div");
    
    divEl.style.height = divEl.style.width = 30 + 10 * number + "px";
    divEl.style.background = getRandomHexColor();
    arrDiv.push(divEl);
  }
  return arrDiv;
};

const destroyBoxes = () => (boxesDiv.innerHTML = "");

btnCreate.addEventListener("click", () => boxesDiv.append(...createBoxes(inputTxt.value)));

btnDestroy.addEventListener("click", () => destroyBoxes());
