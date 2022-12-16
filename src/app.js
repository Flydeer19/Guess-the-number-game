"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

function showMessage(message) {
  document.querySelector("#message").textContent = message;
}

function changeBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

const secretNumberBox = document.querySelector("#secret-number");
let scoreValue = document.querySelector("#score");
let inputField = document.querySelector("#input-field");

function playGame() {
  const inputValue = document.querySelector("#input-field").value;
  const inputValueNumber = Number(inputValue);
  let bestScore = document.querySelector("#best-score");

  if (inputValue === "") {
    showMessage("😔 No number");
  } else if (inputValueNumber < 1 || inputValueNumber > 20) {
    alert(
      `❗The number should be between 1 and 20❗ You entered ${inputValueNumber}`
    );
  } else if (inputValueNumber === secretNumber) {
    showMessage("🏆You won");
    secretNumberBox.textContent = secretNumber;
    secretNumberBox.style.width = "20rem";
    changeBackgroundColor("#B1F44C");
    if (score > highscore) {
      highscore = score;
      bestScore.textContent = highscore;
    }
  } else {
    score--;
    if (score < 1) {
      showMessage("😥 You lost");
      scoreValue.textContent = 0;
      changeBackgroundColor("#e54b13");
    } else {
      const guessRange =
        inputValueNumber > secretNumber ? "🡵 Too high" : "🡶 Too low";
      showMessage(guessRange);
      scoreValue.textContent = score;
    }
  }
  inputField.focus();
  inputField.value = "";
}

function restartGame() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  score = 20;
  scoreValue.textContent = 20;

  document.querySelector(
    "#message"
  ).innerHTML = `<i class="fa-solid fa-lightbulb"></i> Start guessing...`;
  changeBackgroundColor("#f8fe85");
  secretNumberBox.textContent = "?";
  secretNumberBox.style.width = "12.5rem";
}

const checkButton = document.querySelector("#check-button");
checkButton.addEventListener("click", playGame);

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartGame);

inputField.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    checkButton.click();
  }
});
