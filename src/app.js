"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector("#secret-number").textContent = secretNumber;

function showMessage(message) {
  document.querySelector("#message").textContent = message;
}

function changeBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function playGame() {
  let inputValue = document.querySelector("#input-field").value;
  let inputValueNumber = Number(inputValue);
  const inputField = document.querySelector("#input-field");

  if (inputValue === "") {
    showMessage("😔 No number");
  } else if (inputValueNumber < 1 || inputValueNumber > 20) {
    alert(
      `❗The number should be between 1 and 20❗ You entered ${inputValueNumber}`
    );
  } else if (inputValueNumber === secretNumber) {
    showMessage("🏆You won");
    changeBackgroundColor("#B1F44C");
  } else {
    let guessRange =
      inputValueNumber > secretNumber ? "🡵 Too high" : "🡶 Too low";
    showMessage(guessRange);
  }
  inputField.focus();
  document.querySelector("#input-field").value = "";
}
let checkButton = document.querySelector("#check-button");
checkButton.addEventListener("click", playGame);
