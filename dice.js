class Player {
    constructor(id) {
        this.id = id;
        this.score = 0;
    }

    addScore(score) {
        this.score += score;
        document.getElementById('score' + this.id).value = this.score;
    }
}

class Game {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.activePlayer = 0;
        this.roundScore = 0;
        this.gamePlaying = true;
    }

    rollDice() {
        let dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('die').value = dice;
        return dice;
    }

    hold() {
        this.players[this.activePlayer].addScore(this.roundScore);
        this.checkWin();
        this.nextPlayer();
    }

    nextPlayer() {
        this.activePlayer = this.activePlayer === 0 ? 1 : 0;
        this.roundScore = 0;
        document.getElementById('total').value = '0';
        document.getElementById('current').textContent = 'Player ' + (this.activePlayer + 1);
    }

    checkWin() {
        if (this.players[this.activePlayer].score >= 100) {
            document.getElementById('player' + this.activePlayer).textContent = 'Winner!';
            this.gamePlaying = false;
        }
    }
}

let player1 = new Player(0);
let player2 = new Player(1);
let game = new Game(player1, player2);

document.getElementById('new_game').addEventListener('click', () => game = new Game(player1, player2));

document.getElementById('roll').addEventListener('click', function() {
    if(game.gamePlaying) {
        let dice = game.rollDice();
        if (dice !== 1) {
            game.roundScore += dice;
            document.getElementById('total').value = game.roundScore;
        } else {
            game.nextPlayer();
        }
    }    
});

document.getElementById('hold').addEventListener('click', function() {
    if (game.gamePlaying) {
        game.hold();
    }
});
