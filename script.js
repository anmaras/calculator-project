let firstOperand;
let operator = null; //default operator condition
let secondOperand;
let screenReset = false;

const display = document.querySelector(".display-text");
const displayHistory = document.querySelector(".display-history");
const numberButtons = document.querySelectorAll(".numbers");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const operatorButtons = document.querySelectorAll(".operators");
const equalButton = document.querySelector(".evaluate");
const PLUS_OPERATOR = "+";
const MULTIPLY_OPERATOR = "*";
const DIVIDE_OPERATOR = "/";
const SUBTRACT_OPERATOR = "-";

decimalButton.addEventListener("click", appendDecimal);
clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLast);
equalButton.addEventListener("click", evaluation);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => operatorSelection(button.textContent));
});

function resetScreen() {
  display.textContent = "";
  screenReset = false; //will return falce every time is called
}

function clearAll() {
  display.textContent = "0";
  displayHistory.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === "") display.textContent = "0";
}

function appendNumber(number) {
  if (display.textContent === "0" || screenReset) resetScreen(); // condition to append numbers , screenReset turns true from operationSelection function and false from it self.
  display.textContent += number;
}

function appendDecimal() {
  if (screenReset) resetScreen();
  if (display.textContent === "") display.textContent = "0";
  if (!display.textContent.includes(".")) display.textContent += ".";
}

function operatorSelection(operatorButton) {
  if (operator !== null) evaluation(); // if operator is not null will evaluate
  firstOperand = display.textContent;
  operator = operatorButton;
  displayHistory.textContent = `${firstOperand} ${operator}`;
  screenReset = true; // changed from false to true everytime an operator is clicked, it is used in appendNumber ,decimal and evaluation functions
}

function evaluation() {
  if (operator === null || screenReset) return; // condition wont let the equal button to be used if operator is not active or if screenReset is true
  secondOperand = display.textContent;
  display.textContent = operate(operator, firstOperand, secondOperand);
  displayHistory.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
  operator = null;
}

function roundResult(number) {
  return Math.round(number);
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
