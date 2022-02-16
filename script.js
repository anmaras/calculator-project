const display = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");
display.textContent = 0;
let valueArray = [];
let valueArraySecond = [];
console.log(display.textContent);

// const clear = () => {
//   valueArray.length = 0;

//   displayUpdate();
// };

const inputNumber = (value) => {
  // if (valueArray.length < 13) {
  // valueArray.push(value);
  // }
  // displayUpdate();
};

const displayUpdate = () => {
  if (display.textContent === "0") {
    display.textContent = buttonValue;
  } else {
    display.textContent += buttonValue;
  }
};

const inputDecimal = (dot) => {
  if (dot === ".") {
    display.textContent = display.textContent + ".";
  }
  // checkFirstIndexDecimal();
  // displayUpdate();
};

// const checkFirstIndexDecimal = () => {
//   if (valueArray[0] === ".") {
//     // valueArray.unshift("0");
//     valueArray.splice(0, 0, 0);
//   }
// };

// const deleteLast = () => {
//   valueArray.splice(-1, 1);
//   // valueArray.pop();
//   displayUpdate();
// };

// const storeFirstValue = () => {
//   const firstArray = valueArray.join("");
//   let firstNum = parseFloat(firstArray);

//   console.log(firstNum);
//   displayUpdate();
// };

// const add = (firstN, secondN) => {
//   let result = 0;
//   let firstNumber = parseFloat(firstN);
//   let secondNumber = parseFloat(secondN);
//   result = firstNumber + secondNumber;
//   return result;
// };

allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.value;
    const displayText = display.textContent;
    let operator;
    // if (buttonValue === "C") {
    //   clear();
    //   // console.log(valueArray);
    // }
    if (buttonValue >= 0 && buttonValue <= 9) {
      if (display.textContent === "0") {
        display.textContent = buttonValue;
      } else {
        display.textContent = displayText + buttonValue;
      }
      // console.log(valueArray);
    }
    // if (buttonValue === "Del") {
    //   deleteLast();
    //   console.log("del", valueArray);
    // }

    if (buttonValue === ".") {
      display.textContent = displayText + ".";
    }
    // console.log(valueArray);
    // inputDecimal(buttonValue);

    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "/" ||
      buttonValue === "*"
    ) {
      display.textContent = "";
    }
    operator = buttonValue;
    if (display.textContent === "" || displayText.charAt(0) === operator) {
      display.textContent = buttonValue;
    }
  })
);
// const operation = (operator) => {
//   const selectedOperator = operator;
//   if (!operator) {
//     if (display.textContent === "0" || selectedOperator === "+") {
//       display.textContent = inputValue;
//     }
//   }
// };
