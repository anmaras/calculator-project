const displayContent = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".numbers");
const utilitiesButtons = document.querySelectorAll(".utilities");
const operatorsButtons = document.querySelectorAll(".operators");

let buttonNumberValues = [];

const clear = () => {
  displayContent.textContent = "0";
  buttonNumberValues = [];
};

const concat = (buttonValue) => {
  buttonNumberValues.push(buttonValue);
  displayContent.textContent = buttonNumberValues.join("");
  if (buttonNumberValues.includes(".")) {
  }
};

const deleteLast = () => {
  buttonNumberValues.pop();
  displayContent.textContent = buttonNumberValues.join("");
  if (displayContent.textContent === "") {
    displayContent.textContent = 0;
  }
};

allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.value;
    console.log(buttonValue);
    if (buttonValue === "C") {
      clear();
    } else if ((buttonValue >= 0 && buttonValue <= 9) || buttonValue === ".") {
      concat(buttonValue);
    } else if (buttonValue === "Del") {
      deleteLast();
    }
  })
);
