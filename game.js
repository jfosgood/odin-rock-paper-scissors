let playerWins = 0;
let computerWins = 0;

function computerPlay () {
        const choices = ["rock", "paper", "scissors"];
        let i = Math.floor(Math.random()*3);
        
        let computerSelection = choices[i];
        
        return computerSelection;
}

function getUserSelection(){
    const validChoices = ["rock", "paper", "scissors", "q"];
    let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors' to play another round or 'q' to quit");
    playerSelection = playerSelection.toLocaleLowerCase()
    
    if (validChoices.includes(playerSelection)){
        return playerSelection;
    }
    else{
        alert("Invalid choice, please try again");
        getUserSelection();
    }
}

function playRound(playerSelection, computerSelection){
    const selections = ["rock", "paper", "scissors"];
    const playerChoosesRock = ["Tie", "You Lose! Paper beats Rock", "You Win! Rock beats Scissors"];
    const playerChoosesPaper = ["You Win! Paper beats Rock", "Tie", "You Lose! Scissors beats Paper"];
    const playerChoosesScissors = ["You Lose! Rock beats Scissors", "You Win! Scissors beats Paper", "Tie"];
    
    if (playerSelection==="rock"){
        let indexOfComputerChoice = selections.indexOf(computerSelection);
        let result = playerChoosesRock[indexOfComputerChoice];
        switch (indexOfComputerChoice) {
            case 0:
                console.log(result);
                break;
            case 1:
                console.log(result);
                computerWins+=1;
                break;
            case 2:
                console.log(result);
                playerWins +=1;
                break;
        }
        return result;
    }
    else if (playerSelection==="paper"){
        let indexOfComputerChoice = selections.indexOf(computerSelection);
        let result = playerChoosesPaper[indexOfComputerChoice];
        switch (indexOfComputerChoice) {
            case 0:
                console.log(result);
                playerWins+=1;
                break;
            case 1:
                console.log(result);
                break;
            case 2:
                console.log(result);
                computerWins +=1;
                break;
        }
        return result;
    }
    else if (playerSelection==="scissors"){
        let indexOfComputerChoice = selections.indexOf(computerSelection);
        let result = playerChoosesScissors[indexOfComputerChoice];
        switch (indexOfComputerChoice) {
            case 0:
                console.log(result);
                computerWins+=1;
                break;
            case 1:
                console.log(result);
                playerWins+=1;
                break;
            case 2:
                console.log(result);
                break;
        }
        return result;
    }
}

function game(){
    let counter = 0;
    while (counter<5){
        let userSelection = getUserSelection();
        if (userSelection==="q"){
            break;
        }
        let computerSelection = computerPlay();
        let result = playRound(userSelection, computerSelection);
        console.log(`Current score:/n player: ${playerWins}/n computer: ${computerWins}`);
        counter++;
    }
    if (playerWins===computerWins){
        alert("Tie game refresh to try again");
    }
    else if (playerWins>computerWins){
        alert("You Won! refresh to try again");
    }
    else if (computerWins>playerWins){
        alert("You Lost! refresh to try again");
    }
}

game();
