var score1 = 0;
var score2 = 0;
var accumulatedScore = 0;
var currentPlayer = 1;

function startGame() {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    
    if (player1 === "" || player2 === "") {
        alert("Please enter names for both players.");
        return;
    }

    document.getElementById('turn').innerHTML = player1 + "'s turn";

    alert(player1 + " and " + player2 + ", let's start the game!");
}

function newGame() {
    score1 = 0;
    score2 = 0;
    accumulatedScore = 0;
    currentPlayer = 1;
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
    document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + accumulatedScore;
    alert("New game started!");
    startGame(); // Call startGame to reset player names and turn
}

function rollDie() {
    var dieRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dieRoll').innerHTML = "Die Roll: " + dieRoll;

    if (dieRoll != 1) {
        accumulatedScore += dieRoll;
        document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + accumulatedScore;
    } 

    else {
        accumulatedScore = 0;
        document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + accumulatedScore;
        alert("You rolled a 1, your turn is over!");
        switchPlayer();
    }
}

function checkWin() {
    if (score1 >= 100) {
        document.getElementById('winMessage').innerHTML = document.getElementById('player1').value + " Wins!";
        document.getElementById('winMessage').style.display = "block";
    } else if (score2 >= 100) {
        document.getElementById('winMessage').innerHTML = document.getElementById('player2').value + " Wins!";
        document.getElementById('winMessage').style.display = "block";
    }
}

function hold() {
    if (currentPlayer == 1) {
        score1 += accumulatedScore;
        document.getElementById('score1').innerHTML = score1;
    } else {
        score2 += accumulatedScore;
        document.getElementById('score2').innerHTML = score2;
    }
    accumulatedScore = 0;
    document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + accumulatedScore;
    checkWin();
    switchPlayer();
}

function switchPlayer() {
    currentPlayer = 3 - currentPlayer; // This will switch between 1 and 2
    var player = document.getElementById('player' + currentPlayer).value;
    document.getElementById('turn').innerHTML = player + "'s turn";
}