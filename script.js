let secretNumber = Math.floor(Math.random() * 20) + 1; //random integer from 0 to 20
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    document.querySelector(".message").textContent =
      "Please enter a valid Number!";
  } else if (guessedNumber == secretNumber && score > 0) {
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").textContent = guessedNumber;
    document.querySelector(".message").textContent = "You won the Game!";

    highscore = score > highscore ? score : highscore;
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessedNumber > secretNumber ? "Too high" : "Too low";
      document.querySelector(".number") == guessedNumber;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose the Game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".highscore").textContent = highscore;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".message").textContent = "Start guessing...";
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
