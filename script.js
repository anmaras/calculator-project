const displayContent = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".numbers");
const utilitiesButtons = document.querySelectorAll(".utilities");
const operatorsButtons = document.querySelectorAll(".operators");
let numberOneArr;
let numberTwoArr;
displayContent.textContent = "";

// const getNumberButtonValue = (e) => {
//   numberArr.push(e.target.value);
//   displayContent.textContent = numberArr.join("");
//   if (numberArr.join("").length > 13) {
//     displayContent.textContent = numberArr.slice(0, 13).join("");
//   }
// };

// numberButtons.forEach((button) => {
//   button.addEventListener("click", getNumberButtonValue);
// });

const clearButton = (e) => {
  if (e.target.value === "C") {
    displayContent.textContent = "0";
  }
};

const numberButtonValues = (e) => {
  displayContent.textContent += e.target.value;
};

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.value;
    numberButtonValues(e);
    clearButton(e);
  });
});
