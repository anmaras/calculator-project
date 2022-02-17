const display = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".numbers");
const decimalButton = document.querySelector(".decimal");
console.log(decimalButton);

decimalButton.addEventListener("click", () => appendDecimal());

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

function appendNumber(number) {
  if (display.textContent === "0") display.textContent = number;
  else display.textContent += number;
}

function appendDecimal() {
  if (!display.textContent.includes(".")) display.textContent += ".";
}
