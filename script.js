const display = document.querySelector(".display-text");
const allButtons = document.querySelectorAll("button");
const history = document.querySelector(".display-history");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNumber = display.textContent;
    if (!action) {
      if (display.textContent === "") {
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
      console.log("operator key");
    }
    if (action === "decimal") {
      console.log("decimal key");
    }
    if (action === "clear") {
      console.log("clear key");
    }
    if (action === "calculate") {
      console.log("calculate key");
    }
  });
});
