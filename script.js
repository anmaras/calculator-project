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
const ENTER_KEY = "Enter";
const ESCAPE_KEY = "Escape";
const BACKSPACE_KEY = "Backspace";
const DECIMAL_KEY = ".";
const DISPLAY_MAX_LENGTH = 13;
const HISTORY_MAX_LENGTH = 15;

decimalButton.addEventListener("click", appendDecimal);
clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLast);
equalButton.addEventListener("click", evaluation);

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName >= "0" && keyName <= "9") appendNumber(keyName);
  console.log(keyName);
  if (
    keyName === PLUS_OPERATOR ||
    keyName === DIVIDE_OPERATOR ||
    keyName === MULTIPLY_OPERATOR ||
    keyName === SUBTRACT_OPERATOR
  )
    operatorSelection(keyName);
  if (keyName === ENTER_KEY) evaluation();
  if (keyName === ESCAPE_KEY) clearAll();
  if (keyName === BACKSPACE_KEY) deleteLast();
  if (keyName === DECIMAL_KEY) appendDecimal();
});

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
  display.textContent = "";
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
  if (display.textContent === "" || diplayReset) resetDisplay(); // condition to append numbers , diplayReset turns true from operationSelection function and false from it self.
  display.textContent += number;
}

function appendDecimal() {
  if (diplayReset) resetDisplay(); // need the displayReset to be false so it can append the decimal after the operand is not null
  if (display.textContent === "") display.textContent = "0";
  if (!display.textContent.includes(".")) display.textContent += ".";
}

function operatorSelection(operatorButton) {
  if (display.textContent !== "") {
    if (operator !== null) evaluation();
    firstOperand = display.textContent;
    operator = operatorButton;
    displayHistory.textContent = `${firstOperand}${operatorButton}`;
    diplayReset = true; // changed from false to true everytime an operator is clicked, it is used in appendNumber ,decimal and evaluation functions
  }
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
    if (display.textContent.length > DISPLAY_MAX_LENGTH) {
      // condition if the number is too big for calculation
      display.textContent = roundResult(result).toExponential(6);
    }
  }
  displayHistory.textContent = `${firstOperand}${operator}${secondOperand}=`;
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
