const gameIcons = document.querySelectorAll("div.icon");
const resetButton = document.querySelector("#reset");
const playerScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#computer-score");
const resultsText = document.querySelector("#results-readout");

let currentSelection = "";

let playerWins = 0;
let computerWins = 0;

resetButton.addEventListener("click", (e)=>resetScore());


gameIcons.forEach((icon)=>{
        let iconElement = icon.firstChild.nextSibling;
        icon.addEventListener('click', (e)=>{
                let computerSelection = computerPlay();
                console.log(`player selection: ${iconElement.id} \n computer selection: ${computerSelection}`);
                let result = playRound(iconElement.id, computerSelection);
                resultsText.textContent = result;
                checkForVictory();
        })
})

function checkForVictory(){
        if(playerWins<5 && computerWins<5){
                return;
        }
        if (playerWins>computerWins){
                alert("You win!");
                resetScore();
        }
        else{
                alert("You're a loser!");
                resetScore();
        }
}


function computerPlay () {
        const choices = ["rock", "paper", "scissors"];
        let i = Math.floor(Math.random()*3);
        let computerSelection = choices[i];
        
        return computerSelection;
}

function playRound(playerSelection, computerSelection){
        let result = "";
        switch (playerSelection){
                case "rock":
                        switch (computerSelection) {
                                case 'rock':
                                        result = "Tie!";
                                        break;
                                case 'paper':
                                        result = "You Lose! Paper beats Rock";
                                        computerWins++;
                                        break;
                                case "scissors":
                                        result = "You Win! Rock beats Scissors";
                                        playerWins++;
                                        break;
                        }
                break;
                case 'paper':
                        switch (computerSelection) {
                                case 'rock':
                                        result = "You Win! Paper beats Rock";
                                        playerWins++;// code
                                        break;
                                case 'paper':
                                        result = "Tie!";
                                        break;
                                case "scissors":
                                        result = "You Lose! Scissors beats Paper";
                                        computerWins++;
                                        break;
                        }// code
                break;
                case 'scissors':
                        switch (computerSelection) {
                                case 'rock':
                                        result = "You Lose! Rock beats Scissors";
                                        computerWins++;// code
                                        break;
                                case 'paper':
                                        result = "You Win! Scissors beats Paper";
                                        playerWins++;
                                        break;
                                case "scissors":
                                        result = "Tie!";
                                        break;
                        }// code
                break;
                
        }
        playerScoreSpan.textContent=playerWins;
        computerScoreSpan.textContent=computerWins;
        return result;
        
}


function resetScore(){
        playerWins=0;
        computerWins=0;
        playerScoreSpan.textContent = " "+playerWins;
        computerScoreSpan.textContent = " "+computerWins;
}

