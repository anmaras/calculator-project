let firstOperand;
let operator;
let secondOperand;
const display = document.querySelector(".display-text");
const numberButtons = document.querySelectorAll(".numbers");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const operatorButtons = document.querySelectorAll(".operators");
const PLUS_OPERATOR = "+";
const MULTIPLY_OPERATOR = "*";
const DIVIDE_OPERATOR = "/";
const SUBTRACT_OPERATOR = "-";

decimalButton.addEventListener("click", appendDecimal);
clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLast);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => operatorSelection(button.textContent));
});

function appendNumber(number) {
  if (display.textContent.length !== 13)
    if (display.textContent === "0") display.textContent = number;
    else display.textContent += number;
}

function appendDecimal() {
  if (display.textContent.length !== 13)
    if (!display.textContent.includes(".")) display.textContent += ".";
}

function clearAll() {
  display.textContent = "0";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === "") display.textContent = "0";
}

function operatorSelection(operator) {
  let operatorSelection;
  if (
    operator === PLUS_OPERATOR ||
    operator === MULTIPLY_OPERATOR ||
    operator === DIVIDE_OPERATOR ||
    operator === SUBTRACT_OPERATOR
  )
    operatorSelection = operator;
  console.log(operatorSelection);
}
