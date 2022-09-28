function getComputerChoice() {
    let result = Math.floor(Math.random()*3);
    switch(result) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("Player: " + playerSelection + ", CP: " + computerSelection);
    //computerSelection -> 0 Rock, 1 Paper, 2 Scissor
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rocks beats Scissors";
    } else {
        return "It's a tie. Try again"
    }
}

function game() {
    let playerCount = 0;
    let cpCount = 0;
    while (playerCount <= 5  && cpCount <= 5) { //previously had this coded for 5 rounds, now have it coded where it will end when winner has 5 points
        let playerSelection = prompt("What weapon will you choose?");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if (result.charAt(4) == 'w') {
            playerCount++;
        } else if (result.charAt(4) ==  'l') {
            cpCount++;
        }
    }

    

    if (playerCount>cpCount) {
        console.log("Player won!");
    } else if (cpCount>playerCount) {
        console.log("Computer won!");
    } else {
        console.log("It's a tie!");
    }
}

