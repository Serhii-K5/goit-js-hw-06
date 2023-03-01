
const elInput = document.querySelector("#font-size-control");
const txtSpan = document.querySelector("#text");

// v1
elInput.addEventListener("change", (eventChange) => (txtSpan.style.fontSize = eventChange.target.value + "px"));

// v2
// elInput.addEventListener("change", (eventChange) => (txtSpan.style.fontSize = `${eventChange.target.value}px`));
