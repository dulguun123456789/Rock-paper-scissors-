var cPoint = document.querySelector(".cPoint");
var pPoint = document.querySelector(".pPpoint");  
var cChoice = document.querySelector(".cChoice");
var pChoice = document.querySelector(".pChoice");
var result = document.querySelector(".result");

var computerChoice;
var playerScore = 0;
var computerScore = 0;

function play(playerChoice) {
    pChoice.innerText = "Player choice: " + playerChoice;

    var random = Math.floor(Math.random() * 3);
    if (random == 0) {
        cChoice.innerText = "Computer choice: rock";
        computerChoice = "rock";
    } else if (random == 1) {
        cChoice.innerText = "Computer choice: paper";
        computerChoice = "paper";
    } else {
        cChoice.innerText = "Computer choice: scissors";
        computerChoice = "scissors";
    }

// winner : p-> rock 
    if (playerChoice === computerChoice) {
        result.innerText = "Winner: It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerText = "Winner: Player wins!";
        playerScore++ 
    } else {
        result.innerText = "Winner: Computer wins!";
        computerScore++ 
    }

    cPoint.innerText = "Computer point: " + computerScore;
    pPoint.innerText = "Player point: " + playerScore;
}
function reset(){
    playerScore = 0;
    computerScore = 0;
    cPoint.innerText = "Computer point: 0";
    pPoint.innerText = "Player point: 0";
    cChoice.innerText = "Computer choice:";
    pChoice.innerText = "Player choice:";
    result.innerText = "Winner:";
}
