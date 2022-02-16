const display = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");

let valueArray = [];

const clear = () => {
  valueArray.length = 0;

  displayUpdate();
};

const inputNumber = (value) => {
  if (valueArray.length < 13) {
    valueArray.push(value);
  }
  displayUpdate();
};

const displayUpdate = () => {
  display.textContent = valueArray.join("");
  if (display.textContent === "") {
    display.textContent = "0";
  }
};
displayUpdate();

const inputDecimal = (dot) => {
  if (!valueArray.includes(".")) {
    valueArray.push(dot);
  }
  checkFirstIndexDecimal();
  displayUpdate();
};

const checkFirstIndexDecimal = () => {
  if (valueArray[0] === ".") {
    // valueArray.unshift("0");
    valueArray.splice(0, 0, 0);
  }
};

const deleteLast = () => {
  valueArray.splice(-1);
  // valueArray.pop();
  displayUpdate();
};

const operation = (operator) => {
  valueArray.push(operator);
  if (valueArray.indexOf(operator) === 0) {
    valueArray.shift(operator);
  }
  displayUpdate();
  console.log(valueArray.indexOf(operator));
};

allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.value;
    if (buttonValue === "C") {
      clear();
      // console.log(valueArray);
    }
    if (buttonValue >= 0 && buttonValue <= 9) {
      inputNumber(buttonValue);
      // console.log(valueArray);
    }
    if (buttonValue === "Del") {
      deleteLast();
      // console.log(valueArray);
    }
    if (buttonValue === ".") {
      inputDecimal(buttonValue);
      // console.log(valueArray);
    }
    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "/" ||
      buttonValue === "*"
    ) {
      operation(buttonValue);
    }
  })
);
