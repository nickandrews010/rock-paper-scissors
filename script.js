function getComputerChoice() {

    const choice = Math.round(Math.random() * 1e2) / 1e2;
    console.log(choice);

    if (choice <= 0.33) {
        return 'rock';
    }
    else if (choice <= 0.66) {
        return 'paper';
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice() {

    const choice = prompt('Rock, paper, or scissors?');

    if (choice.toLowerCase() === 'rock') {
        return 'rock';
    }
    else if (choice.toLowerCase() === 'paper') {
        return 'paper';
    }
    else if (choice.toLowerCase() === 'scissors') {
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let result;

    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            result = 'tied';
        }
        else if (computerChoice === 'paper') {
            result = 'lost';
        }
        else if (computerChoice === 'scissors') {
            result = 'won';
        }
    }

    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            result = 'won';
        }
        else if (computerChoice === 'paper') {
            result = 'tied';
        }
        else if (computerChoice === 'scissors') {
            result = 'lost';
        }
    }

    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            result = 'lost';
        }
        else if (computerChoice === 'paper') {
            result = 'won';
        }
        else if (computerChoice === 'scissors') {
            result = 'tied';
        }
    }

    switch (result) {
        case 'won':
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;
        case 'lost':
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 'tied':
            console.log(`You tie! ${computerChoice} ties ${humanChoice}`);
            break;

    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`You beat the computer ${humanScore} to ${computerScore}!`);
    }
    else if (humanScore < computerScore) {
        console.log(`The computer beat you ${computerScore} to ${humanScore}`);
    }
    else {
        console.log(`You tied the computer ${humanScore} to ${computerScore}`);
    }
}

playGame();
