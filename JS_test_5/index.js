let deck = [
    { name: 'Superman', power: 67},
    { name: 'Batman', power: 84},
    { name: 'Spiderman', power: 42},
    { name: 'Thor', power: 95},
    { name: 'Captain America', power: 21},
    { name: 'Mickey', power: 100},

];

for (let i = (deck.length - 1); i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
}

let player1Deck = deck.slice(0, 3);
let player2Deck = deck.slice(3, 6);

let player1Hand = "";
let player2Hand = "";

let limbo = [];

let round = 1;

while( player1Deck.length !== 0 && player2Deck.length !== 0) {
    console.log("------ Start of round " + round + " ------" );
    player1Hand = player1Deck[0];
    player1Deck.shift();
    player2Hand = player2Deck[0];
    player2Deck.shift();

    if( player1Hand.speed > player2Hand.speed ) {
        console.log(player1Hand.speed + " > " + player2Hand.speed);
        console.log("Player 1 has " + player1Deck.length + " cards in the deck");
        console.log("Player 2 has " + player2Deck.length + " cards in the deck");
        console.log("Player 1 Wins the Round");
        player1Deck.push(player1Hand, player1Hand);
        
        if( limbo.length > 0 ) {
            for(let i=0; i < limbo.length; i++ ) {
                player1Deck.push(limbo[i]);
            }
            limbo = []
        }
    } else if(  player1Hand.speed < player2Hand.speed ) {
        console.log(player1Hand.speed + " < " + player2Hand.speed);
        console.log("Player 1 has " + player1Deck.length + " cards in the deck");
        console.log("Player 2 has " + player2Deck.length + " cards in the deck");
        console.log("Player 2 Wins the Round");
        player2Deck.push(player1Hand, player1Hand);
        
        if( limbo.length > 0 ) {
            for(let i=0; i < limbo.length; i++ ) {
                player2Deck.push(limbo[i]);
            }
            limbo = []
        }
    } else {
        console.log("It's a draw!!!");
        limbo.push(player1Hand, player2Hand)
    }
    
    console.log("----------------- End of round " + round + " -----------------")
    console.log("                                                              ");
    
    if( player1Deck.length === 0 ) {
        console.log(" +++++++ Player 2 Wins the Game ++++++++");
    } else if( player2Deck.length === 0) {
        console.log(" +++++++ Player 1 Wins the Game ++++++++");
    }
    
    round++;

}