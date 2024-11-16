const display = document.getElementById("display");
const buttons = document.querySelectorAll(
  ".button, .button1, .button2, .button3"
);

let currentInput = "";
let resetDisplay = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } 
    else if (value === "RESET") {
      currentInput = "";
      display.textContent = "0";
    } 
    else if (value === "=") {
      try {
        currentInput = currentInput.replace("×", "*").replace("÷", "/");
        const result = eval(currentInput);
        currentInput = result.toString();
        display.textContent = result;
        resetDisplay = true;
      } 
      catch (error) {
        display.textContent = "Error";
        currentInput = "";
      }
    } 
    else {
      if (resetDisplay && !isNaN(value)) {
        currentInput = value;
        resetDisplay = false;
      }
       else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
