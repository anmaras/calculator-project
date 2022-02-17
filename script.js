const display = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");

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
    const previousKeyType = calculator.dataset.previousKeyType; // for keeping on memory what was the last key

    if (!action) {
      if (displayNumber === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNumber + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayNumber;
      if (firstValue && operator && previousKeyType !== "operator") {
        const calcValue = calculateAdd(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      }
      calculator.dataset.firstValue = displayNumber;
      calculator.dataset.operator = action;
      calculator.dataset.previousKeyType = "operator";
    }

    if (action === "decimal") {
      if (!display.textContent.includes(".")) {
        display.textContent = displayNumber + ".";
      } else if (previousKeyType === "operator") {
        display.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
    }

    if (action === "calculate") {
      //stored values from operator
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayNumber;

      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayNumber;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculateAdd(firstValue, operator, secondValue);
      }

      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
    }

    if (action === "clear") {
      display.textContent = "0";
      delete calculator.dataset.firstValue;
      delete calculator.dataset.operator;
      calculator.dataset.previousKeyType = "clear";
    }
  });
});
