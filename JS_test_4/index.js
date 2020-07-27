let player1Score = 0;
let player2Score = 0;

let player1Turn = true;
let player2Turn = false;

document.getElementById("btnRoll").addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random()*6 + 1);
    
    if(player1Turn) {
        player1Score += randomNumber;
        document.getElementById("player1Dice").textContent = randomNumber;
        document.getElementById("player1Score").textContent = player1Score;
        document.getElementById("message").textContent = "Player 2 turn";
        
        document.getElementById("player1Dice").classList.remove("active");
        document.getElementById("player2Dice").classList.add("active");
        
        if( randomNumber === 1) {
            document.getElementById("message").textContent = "You lost the game, Player 2 Wins";
            
            document.getElementById("btnRoll").style.display = "none";
            document.getElementById("reset").style.display = "inline-block";
        }
    } else {
        player2Score += randomNumber;
        document.getElementById("player2Dice").textContent = randomNumber;
        document.getElementById("player2Score").textContent = player2Score;
        document.getElementById("message").textContent = "Player 1 turn";
        
        document.getElementById("player2Dice").classList.remove("active");
        document.getElementById("player1Dice").classList.add("active");
        
        if( randomNumber === 1) {
            document.getElementById("message").textContent = "You lost the game, Player 1 Wins";
            
            document.getElementById("btnRoll").style.display = "none";
            document.getElementById("reset").style.display = "inline-block";
        }
    }
    
    player1Turn = !player1Turn;
    player2Turn = !player2Turn;
    
    if( player1Score >= 20 ) {
        document.getElementById("message").textContent = "Player 1 Wins";
        
        document.getElementById("reset").style.display = "inline-block";
        document.getElementById("btnRoll").style.display = "none";
    } else if( player2Score >= 20) {
        document.getElementById("message").textContent = "Player 2 Wins";
        
        document.getElementById("reset").style.display = "inline-block";
        document.getElementById("btnRoll").style.display = "none";
    }
})

document.getElementById("reset").addEventListener("click", function() {
    reset();
});

function reset() {
    player1Turn = true;
    player2Turn = false;
    
    player1Score = 0;
    player2Score = 0;
    
    if( document.getElementById("player2Dice").classList.contains("active")) {
        document.getElementById("player2Dice").classList.remove("active");
        document.getElementById("player1Dice").classList.add("active");
    }
    
    document.getElementById("player1Score").textContent = 0;
    document.getElementById("player2Score").textContent = 0;
    
    document.getElementById("player1Dice").textContent = 0;
    document.getElementById("player2Dice").textContent = 0;
    
    document.getElementById("message").textContent = "Player 1 Turn";
    
    document.getElementById("btnRoll").style.display = "inline-block";
    document.getElementById("reset").style.display = "none";
}