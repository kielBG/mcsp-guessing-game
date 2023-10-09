// generate a random number
function secretNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

let gameObj = {
    player: undefined,
    prevScore: undefined
};

guessingGame(gameObj);

function guessingGame(obj) {
    let randomNumber = secretNumber(1, 100);
console.log(randomNumber);

//"How Many Tries? (Feature 3)"

    let history = [];
//prompt the user to guess. do while loop - a loop
//that executes a specified statement until the test condition
//evaluates to false
    let player = prompt("May I ask who I am speaking with?");
    if (obj.player === undefined || obj.player !== player) {
    alert(`Welcome to the guessing game ${player}!`);
    } else {
        alert(`Trying again are we ${player}?\n niceeeeee.`);
    }

    do {
        guess = parseInt(prompt(`${player}, guess a random number between 1 - 100!`));
    if (guess === randomNumber) {
        history.push(guess);
        alert(`GG ${player} you only did it in ${history.length} guesses!\n Your previous guesses were ${history.join()}`);
        if (obj.player === player) {
            if (obj.prevScore > history.length) {
                alert(`Wow, you did better than last time by ${obj.prevScore - history.length}! Want a trophey or something?`);
            } else if (obj.prevScore < history.length) {
                 alert(`Oof, you were worse by ${history.length - obj.prevScore}! You should try harder.`);
            }
        } 
        obj.player = player;
        obj.prevScore = history.length;
    } else if (guess > randomNumber) {
        alert(`too high ${player}, guess lower`);
    } else if (guess < randomNumber) {
        alert(`Too low too slow ${player}, guess higher`);
    } else {
        alert(`don't know what you're doing ${player}, input a number`);
        }
        history.push(guess);
    }
    while (parseInt(guess) !== randomNumber);

    let playAgain = prompt(`${player}, would you like to take another wack at it?\nPlease respond with y or n.`);
        if (playAgain === "y") {
            guessingGame(obj);
        } else {
            alert("Well I didn't want play again anyways.");
        }
    
};

