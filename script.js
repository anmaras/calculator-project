const displayContent = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".numbers");
const utilitiesButtons = document.querySelectorAll(".utilities");
const operatorsButtons = document.querySelectorAll(".operators");

let valuesArray = [];

const clear = () => {
  displayContent.textContent = "0";
  valuesArray = [];
};

const concat = (value) => {
  if (displayContent.textContent.length < 13) {
    valuesArray.push(value);
    displayContent.textContent = valuesArray.join("");
  }
};

const deleteLast = () => {
  valuesArray.pop();
  displayContent.textContent = valuesArray.join("");
  if (displayContent.textContent === "") {
    displayContent.textContent = 0;
  }
};

allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let buttonValue = e.target.value;
    if (buttonValue === "C") {
      clear();
    } else if ((buttonValue >= 0 && buttonValue <= 9) || buttonValue === ".") {
      concat(buttonValue);
    } else if (buttonValue === "Del") {
      deleteLast();
    }
  })
);
