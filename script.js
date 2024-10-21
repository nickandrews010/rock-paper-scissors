console.log('Hello World!');

function getComputerChoice() {

    const choice = Math.round(Math.random() * 100) / 100;
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

console.log(getComputerChoice());