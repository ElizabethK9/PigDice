class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

class Game {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.currentPlayerIndex = 0;
        this.turnScore = 0;
    }

    get currentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    switchPlayer() {
        this.currentPlayerIndex = 1 - this.currentPlayerIndex; // This will switch between 0 and 1
        var player = this.currentPlayer.name;
        document.getElementById('turn').innerHTML = player + "'s turn";
    }

    startGame() {
        var player1 = document.getElementById('player1').value;
        var player2 = document.getElementById('player2').value;
        
        if (player1 === "" || player2 === "") {
            alert("Please enter names for both players.");
            return;
        }

        this.players[0].name = player1;
        this.players[1].name = player2;
        document.getElementById('turn').innerHTML = player1 + "'s turn";

        alert(player1 + " and " + player2 + ", let's start the game!");
    }

    newGame() {
        this.players[0].score = 0;
        this.players[1].score = 0;
        this.turnScore = 0;
        this.currentPlayerIndex = 0;
        document.getElementById('score1').innerHTML = this.players[0].score;
        document.getElementById('score2').innerHTML = this.players[1].score;
        document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + this.turnScore;
        alert("New game started!");
        this.startGame(); // Call startGame to reset player names and turn
    }

    rollDie() {
        var dieRoll = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dieRoll').innerHTML = "Die Roll: " + dieRoll;

        if (dieRoll != 1) {
            this.turnScore += dieRoll;
            document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + this.turnScore;
        } 

        else {
            this.turnScore = 0;
            document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + this.turnScore;
            alert("You rolled a 1, your turn is over!");
            this.switchPlayer();
        }
    }

    checkWin() {
        if (this.players[0].score >= 100) {
            document.getElementById('winMessage').innerHTML = this.players[0].name + " Wins!";
            document.getElementById('winMessage').style.display = "block";
        } else if (this.players[1].score >= 100) {
            document.getElementById('winMessage').innerHTML = this.players[1].name + " Wins!";
            document.getElementById('winMessage').style.display = "block";
        }
    }

    hold() {
        this.currentPlayer.score += this.turnScore;
        document.getElementById('score' + (this.currentPlayerIndex + 1)).innerHTML = this.currentPlayer.score;
        this.turnScore = 0;
        document.getElementById('accumulatedScore').innerHTML = "Accumulated Score: " + this.turnScore;
        this.checkWin();
        this.switchPlayer();
    }
}

var game = new Game(new Player(""), new Player(""));