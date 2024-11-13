const results = document.querySelector(".results");
const compScore = document.querySelector(".compScore");
const yourScore = document.querySelector(".yourScore");

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

    const resultText = document.createElement("p");

    switch (result) {
        case 'won':
            resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            yourScore.innerHTML = `You: ${humanScore}`;
            break;
        case 'lost':
            resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            compScore.innerHTML = `Computer: ${computerScore}`;
            break;
        case 'tied':
            resultText.textContent = `You tie! ${computerChoice} ties ${humanChoice}`;
            console.log(`You tie! ${computerChoice} ties ${humanChoice}`);
            break;

    }

    results.appendChild(resultText);

    if (humanScore === 5) {
        const wonText = document.createElement("p");
        wonText.textContent = `You have 5 points and therefore won the game!`;
        results.appendChild(wonText);
    }

    if (computerScore === 5) {
        const wonText = document.createElement("p");
        wonText.textContent = `The computer has 5 points and therefore won the game!`;
        results.appendChild(wonText);
    }

}

const buttons = document.querySelector(".wrapper");

buttons.addEventListener("click", event => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) return;
    switch (event.target.className) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});
