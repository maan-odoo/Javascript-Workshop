let computerScore = 0;
let userScore = 0;

const RPC = (btn) => {
    let userInput = btn.value;
    const options = ['rock', 'paper', 'scissors'];
    let computerInput = options[Math.floor(Math.random() * options.length)];
    let winner = 0;

    switch (userInput) {
        case 'rock':
            winner = (computerInput === 'rock') ? 3 : (computerInput === 'paper') ? 2 : 1;
            break;
        case 'paper':
            winner = (computerInput === 'rock') ? 1 : (computerInput === 'paper') ? 3 : 2;
            break;
        case 'scissors':
            winner = (computerInput === 'rock') ? 2 : (computerInput === 'paper') ? 1 : 3;
            break;
    }

    document.getElementById("winner").innerHTML = winnerMessage(winner);
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("computer-score").innerHTML = computerScore;

    if (userScore > computerScore) {userInput
        document.getElementById("pmsg").style.color = 'green';
        document.getElementById("pmsg").innerHTML = `Yes, you may win the match &#127881;`;
    } else if (computerScore > userScore) {
        document.getElementById("pmsg").style.color = 'red';
        document.getElementById("pmsg").innerHTML = `No, you may not win the match &#128514;`;
    } else {
        document.getElementById("pmsg").style.color = 'yellow';
        document.getElementById("pmsg").innerHTML = `Oh, the match is a draw &#128513;`;
    }
};

const winnerMessage = (result) => {
    switch (result) {
        case 1:
            userScore++;
            return `Congratulations, you win the match &#127881;`;
        case 2:
            computerScore++;
            return `You lost the match &#128514;`;
        case 3:
            return 'The match is a draw &#128513;';
    }
};

