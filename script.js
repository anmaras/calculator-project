const displayContainer = document.querySelector(".display-text");
const numberButtons = document.querySelectorAll(".numbers");
let text = [];

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    text.push(e.target.value);
    displayContainer.textContent = text.join("");
    console.log(text);
  });
});
