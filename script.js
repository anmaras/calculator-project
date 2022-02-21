let firstOperand;
let operator = null;
let secondOperand;
let screenReset = false;

const display = document.querySelector(".display-text");
const displayHistory = document.querySelector(".display-history");
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

function operatorSelection(operatorButton) {
  firstOperand = display.textContent;
  operator = operatorButton;
  // evaluation();
  if (display.textContent !== "") {
    evaluation();
  }
  console.log(firstOperand);
  console.log(operator);
}

function evaluation() {
  secondOperand = display.textContent;
  console.log(secondOperand);
  display.textContent = operate(operator, firstOperand, secondOperand);
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (operator === PLUS_OPERATOR) {
    return add(a, b);
  } else if (operator === MULTIPLY_OPERATOR) {
    return multiply(a, b);
  } else if (operator === DIVIDE_OPERATOR) {
    return divide(a, b);
  } else if (operator === SUBTRACT_OPERATOR) return subtract(a, b);
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}
