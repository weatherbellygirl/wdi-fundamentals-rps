////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function sayHello(name) {
    alert('Hello ' + name + '!')
}

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move !== null) {
        return move;
    }
    else if (move === null) {
        return getInput();
    }
}

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     /* Your Expression */


function getComputerMove(move) {
    if (move !== null) {
        return move;
    }
    else if (move === null) {
        return randomPlay();
    }
}

    //Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     /* Your Expression */


function getWinner(playerMove, computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === 'paper' && computerMove === 'rock') {
        return 'player';
    }
    else if (playerMove === 'rock' && computerMove === 'paper') {
        return 'computer';
    }
    else if (playerMove === 'scissors' && computerMove === 'paper') {
        return 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'scissors') {
        return 'computer';
    }
    else if (playerMove === 'rock' && computerMove === 'scissors') {
        return 'player';
    }
    else if (playerMove === 'scissors' && computerMove === 'rock') {
        return 'computer';
    }
    else if (playerMove === 'scissors' && computerMove === 'scissors') {
        return 'tie';
    }
    else if (playerMove === 'paper' && computerMove === 'paper') {
        return 'tie';
    }
    else if (playerMove === 'rock' && computerMove === 'rock') {
        return 'tie';
    }

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins <= 5) || (computerWins <= 5)) {

        var playersMove = getPlayerMove()
        var computersMove = getComputerMove()
        var winner = getWinner(playersMove, computersMove)

        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        }

        console.log('Player chose ' + playersMove + ' while Computer chose ' + computersMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }

    return [playerWins, computerWins];
}

