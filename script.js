const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");
const history = document.querySelector(".display-history");
const operators = document.querySelector("#number-wrapper");

const calculateAdd = (firstNum, operator, secondNum) => {
  let result = "";
  if (operator === "add") {
    result = parseFloat(firstNum) + parseFloat(secondNum);
  } else if (operator === "subtract") {
    result = parseFloat(firstNum) - parseFloat(secondNum);
  } else if (operator === "multiply") {
    result = parseFloat(firstNum) * parseFloat(secondNum);
  } else if (operator === "divide") {
    result = parseFloat(firstNum) / parseFloat(secondNum);
  }
  return (display.textContent = result);
};

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const key = e.target;
    // console.log(key);
    const action = key.dataset.action;
    // console.log(action);
    const keyContent = key.textContent;
    // console.log(keyContent);
    const displayNumber = display.textContent;
    const displayHistory = history.textContent;

    if (!action) {
      if (displayNumber === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNumber + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.dataset.firstValue = displayNumber;
      calculator.dataset.operator = action;
      display.textContent = 0;
    }
    if (action === "decimal") {
      if (!display.textContent.includes("."))
        display.textContent = displayNumber + ".";
    }
    if (action === "calculate") {
      //stored values from operator
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayNumber;
      calculateAdd(firstValue, operator, secondValue); // calculate function
    }
    if (action === "clear") {
      display.textContent = "0";
      delete calculator.dataset.firstValue;
      delete calculator.dataset.operator;
    }
  });
});
