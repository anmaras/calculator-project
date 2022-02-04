const displayContent = document.querySelector(".display-text");
const numberButtons = document.querySelectorAll(".numbers");
const utilitiesButtons = document.querySelectorAll(".utilities");
const operatorsButtons = document.querySelectorAll(".operators");
let numberArr = [];

const testFunction = (e) => {
  numberArr.push(e.target.value);
  displayContent.textContent = numberArr.join("");
  if (numberArr.join("").length > 13) {
    displayContent.textContent = numberArr.slice(0, 13).join("");
  }
  console.log(displayContent.textContent);

  console.log(displayContent.textContent.length);
  console.log(numberArr.join("").length);
};

numberButtons.forEach((button) => {
  button.addEventListener("click", testFunction);
});
