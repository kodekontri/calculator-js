const screen = document.querySelector("#screen");
const btnNum = document.querySelectorAll(".btn-num");
const btnOpr = document.querySelectorAll(".btn-opr");
const btnFunc = document.querySelectorAll(".btn-func");

let operator = "";
let isOperatorPressed = false;
let initialValue = 0;

// for (let x = 0; x < btnNum.length; x++) {
//     console.log(btnNum[x])
// }

//Event Listeners for numbers button
btnNum.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let btnValue = this.textContent;

    //check for zero and if key pressed is not decimal
    if (screen.textContent === "0" && btnValue != ".") {
      screen.textContent = "";
    }

    //check if operator is presses
    if (isOperatorPressed) {
      isOperatorPressed = false;
      initialValue = screen.textContent;
      screen.textContent = "";
    }

    //check for existing decimal if decimal was pressed
    if (screen.textContent.includes(".") && btnValue == ".") {
      return;
    }

    //check for screen length
    if (screen.textContent.length >= 14) {
      return;
    }

    //Display on screen
    screen.textContent += btnValue;
  });
});

//Event Listeners for function Button
btnFunc.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let btnValue = this.textContent;

    //check if its backspace to create the backspace function
    if (btnValue == "BKS") {
      let sv = screen.textContent;
      screen.textContent = sv.substring(0, sv.length - 1);
    }

    //check if its backspace to create the backspace function
    if (btnValue == "x2") {
      let value = Number(screen.textContent) ** 2;
      screen.textContent = value;
    }

    //check if its Clear so it clears the screen
    if (btnValue == "C") {
      screen.textContent = 0;
    }

    //Add negetive value
    if (btnValue == "-M") {
      screen.textContent = -screen.textContent;
    }

    //check if the OFF button was pressed
    if (btnValue == "OFF") {
      let btns = document.querySelectorAll(".btn");
      btns.forEach(function (btn) {
        if (btn.textContent != "OFF") {
          btn.disabled = true;
          btn.classList.add("btn-disable");
        } else {
          btn.textContent = "ON";
        }
      });
    }

    //check if the ON button was pressed
    if (btnValue == "ON") {
      let btns = document.querySelectorAll(".btn");
      btns.forEach(function (btn) {
        if (btn.textContent != "ON") {
          btn.disabled = false;
          btn.classList.remove("btn-disable");
        } else {
          btn.textContent = "OFF";
        }
      });
    }
  });
});

//Event Listeners for operator Button
btnOpr.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let btnValue = this.textContent;

    //check if Plus button was pressed
    if (btnValue == "+") {
      isOperatorPressed = true;
      operator = btnValue;
    }

    //check if Minus button was pressed
    if (btnValue == "-") {
      isOperatorPressed = true;
      operator = btnValue;
    }

    //check if Minus button was pressed
    if (btnValue == "/") {
      isOperatorPressed = true;
      operator = btnValue;
    }

    //check if Minus button was pressed
    if (btnValue == "*" || btnValue == "x" || btnValue == "X") {
      isOperatorPressed = true;
      operator = btnValue;
    }

    //check if Minus button was pressed
    if (btnValue == "MOD") {
      isOperatorPressed = true;
      operator = btnValue;
    }

    //check if Equalto button was pressed
    if (btnValue == "=") {
      if (operator.length == 0) {
        return;
      }

      if (operator == "+") {
        screen.textContent = Number(initialValue) + Number(screen.textContent);
      }

      if (operator == "-") {
        screen.textContent = Number(initialValue) - Number(screen.textContent);
      }

      if (operator == "/") {
        screen.textContent = Number(initialValue) / Number(screen.textContent);
      }

      if (operator == "*" || operator == "x" || operator == "X") {
        screen.textContent = Number(initialValue) * Number(screen.textContent);
      }

      if (operator == "MOD") {
        screen.textContent = Number(initialValue) % Number(screen.textContent);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hi");
});
