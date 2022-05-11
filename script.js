const userName = document.getElementById("user-name");
const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const finalResult = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoiceDisplay;
let computerChoiceDisplay;
let result;
// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissor = document.getElementById("scissor");

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoiceDisplay = e.target.id;
    userChoice.innerHTML = userChoiceDisplay;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoiceDisplay = "Rock";
  }
  if (randomNumber === 2) {
    computerChoiceDisplay = "Paper";
  }
  if (randomNumber === 3) {
    computerChoiceDisplay = "Scissor";
  }
  computerChoice.innerHTML = computerChoiceDisplay;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "IT's a draw";
  }
}
