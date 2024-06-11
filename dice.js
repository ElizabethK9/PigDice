var score1 = 0;
var score2 = 0;

function startGame() {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    alert(player1 + " and " + player2 + ", let's start the game!");
}

function newGame() {
    score1 = 0;
    score2 = 0;
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
    alert("New game started!");
}