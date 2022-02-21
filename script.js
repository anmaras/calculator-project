let firstOperand;
let operator = null; //default operator condition
let secondOperand;
let diplayReset = false;

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

function resetDisplay() {
  display.textContent = "";
  diplayReset = false; //will return falce every time is called
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
  if (
    display.textContent === "" ||
    display.textContent === PLUS_OPERATOR ||
    display.textContent === MULTIPLY_OPERATOR ||
    display.textContent === DIVIDE_OPERATOR ||
    display.textContent === SUBTRACT_OPERATOR
  )
    display.textContent = 0;
}

function appendNumber(number) {
  if (display.textContent === "0" || diplayReset) resetDisplay(); // condition to append numbers , diplayReset turns true from operationSelection function and false from it self.
  display.textContent += number;
}

function appendDecimal() {
  if (diplayReset) resetDisplay(); // need the displayReset to be false so it can append the decimal after the operand is not null
  if (display.textContent === "") display.textContent = "0";
  if (!display.textContent.includes(".")) display.textContent += ".";
}

function operatorSelection(operatorButton) {
  if (operator !== null) evaluation(); // if operator is not null will evaluate
  firstOperand = display.textContent;
  operator = operatorButton;
  displayHistory.textContent = `${firstOperand} ${operatorButton}`;
  diplayReset = true; // changed from false to true everytime an operator is clicked, it is used in appendNumber ,decimal and evaluation functions
}

function evaluation() {
  let result;
  if (operator === null || diplayReset) return; // condition wont let the equal button to be used if operator is not active or if diplayReset is true
  secondOperand = display.textContent;
  if (operator === DIVIDE_OPERATOR && secondOperand === "0") {
    result = "Infinity";
    display.textContent = result;
  } else {
    result = operate(operator, firstOperand, secondOperand);
    display.textContent = roundResult(result);
  }
  displayHistory.textContent = `${firstOperand} ${operator} ${secondOperand} =`;
  operator = null; // turn back operator to default
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000; // function to keep the result rounded with three decimal digits
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
