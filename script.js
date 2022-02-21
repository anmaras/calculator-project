const display = document.querySelector(".display-text");
const numberButtons = document.querySelectorAll(".numbers");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

decimalButton.addEventListener("click", appendDecimal);
clearButton.addEventListener("click", clearAll);
deleteButton.addEventListener("click", deleteLast);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

function appendNumber(number) {
  if (display.textContent.length !== 13)
    if (display.textContent === "0") display.textContent = number;
    else display.textContent += number;
}

function appendDecimal() {
  if (display.textContent.length !== 13)
    if (!display.textContent.includes(".")) display.textContent += ".";
}

function clearAll() {
  display.textContent = "0";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent === "") display.textContent = "0";
}
