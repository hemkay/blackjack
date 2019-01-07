//DOM variables
let 
    user = document.getElementById('user'),
    start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    hit = document.getElementById('hit'),
    stay = document.getElementById('stay'),
    yielding = document.getElementById('yield');

user.style.display = 'none';
yielding.style.display = 'none';
cancel.style.display = 'none';
hit.style.display = 'none';
stay.style.display = 'none';
 


//Game Variables
let gameStarted = false,
    playerWon = false,
    playerScore = 0,
    dealerScore = 0,
    dealerWon = false,
    playerCards = [],
    dealerCards = [],
    deck= [],
    username = "",
    gameOver = false;

let suits = ["Hearts", 'Clubs', 'Diamonds', 'Spades'],
    values = ["Ace", 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', "Seven",
                "Six", "Five", 'Four', "Three", "Two"];

//Create deck of a card
function createDeck(suits, values){
    deck = [];
    for(let suitidx = 0; suitidx < suits.length; suitidx++){
        for(let valueidx = 0; valueidx < values.length; valueidx++ ){
            let card = {
                suit : suits[suitidx],
                value : values[suitidx]
            };
            deck.push(card);
        }
    }
    return deck;
}
//select a card from  the deck(output is an object)
function getCard(){
    return deck.shift();
}

//select the real card from the object selected in terms of suit and value.
function selectCard(car){
    return car.value + " of " + car.suit;
}


//Shuffle deck
function shufflecard(decker){
   for(let i = 0; i < decker.length; i++){
       let swapidx = Math.trunc(Math.random() * decker.length);
       let temp = decker[swapidx];
       decker[swapidx] = decker[i];
       decker[i] = temp;
   }
    
}

//Get card numeric value
function cardValue(card){
    switch(card.value){
        case "Ace":
            return 1;
        case "Two":
            return 2;
        case "Three":
            return 3;
        case "Four":
            return 4;
        case "Five":
            return 5;
        case "Six":
            return 6;
        case "Seven":
            return 7;
        case "Eight":
            return 8;
        case "Nine":
            return 9;
        default:
            return 10;
    }
}

//Calculate Score
function cardScore(ArrayCard){
    score = 0;
    let hasAce = false;
    for (let i = 0; i < ArrayCard.length; i++){
        let card = ArrayCard[i];
        value = cardValue(card);
        score += value;
        if (card.value === "Ace"){
            hasAce = true;
        }
    }
    if (hasAce && (score + 10 <= 21)){
        return score += 10;
    }
    return score;
}
//update the scores of the player
function updateScore(){
    dealerScore = cardScore(dealerCards);
    playerScore = cardScore(playerCards);
}

    //Asking for username
function collectUsername(){
    username = prompt("Enter your name for this game:\n");

    //Testing for valid username
    if (username !== null){
        if(username === ""){
            username = "Player 1";      
        }   
    }else{
        username = "Player 1" ;
    }
    
}

//Arrange the players card and score and how the browser will display it
function arrangement(){
    let playerCard = '';
    for(let i = 0; i < playerCards.length; i++){
        playerCard += selectCard(playerCards[i]) + '\n';
    }
    let dealerCard = '';
    for(let i = 0; i < dealerCards.length; i++){
        dealerCard += selectCard(dealerCards[i]) + '\n';
    }
    updateScore();

    user.innerText = 
        'Dealer has :\n' + 
        dealerCard + '\n' +
        '(Score: ' + dealerScore + ')\n\n' +
        username + ' has :\n' + 
        playerCard + '\n' +
        '(Score: ' + playerScore + ')\n\n';
}

//To check who won
function whoWins(){
    
    if (playerCards.length === 5 || dealerCards.length === 5){
        gameOver = true;
        if ((dealerScore === 42 && playerScore === 42) || (dealerScore === playerScore)){
            user.innerText += "\n" +
            "It's a tie!";
        }
        else if (dealerScore > playerScore){
            if (dealerScore <= 42){
                user.innerText += '\n' +
                "Dealer wins!";
            }
            else{

                user.innerText += "\n" +
                username + " wins!";
            }
        }
        else if (playerScore > dealerScore){
            if (playerScore <= 42){
                user.innerText += '\n' +
                username + " wins!";
            }
            else{
                user.innerText += "\n" +
                "Dealer wins!";
            }  
        }
    }
    else if (playerScore === 42 && dealerScore < 42){
        gameOver = true;
        user.innerText += "\n" +
         username + " wins!";
    }
    else if (dealerScore === 42 && playerScore < 42){
        gameOver = true;
        user.innerText += "\n" +
            "Dealer wins!";
    }
    else if (dealerScore === 42 && playerScore === 42){
        gameOver = true;
        user.innerText += "\n" +
         "It's a tie!";
    }
    else if (playerScore < 42 && dealerScore > 42){
        gameOver = true;
        user.innerText += "\n" +
         username + " wins!";
    }
    else if (dealerScore < 42 && playerScore >42){
        gameOver = true;
        user.innerText += "\n" +
            "Dealer wins!";
    }
    else{
        gameOver = false;
    }
    user.style.display = 'block';
    
    
}
// to check if game is over
function isGameOver(){
    if(gameOver){
    start.style.display = 'inline';
    hit.style.display = 'none';
    stay.style.display = 'none';
    cancel.style.display = 'none';
    yielding.style.display = 'none';
    }
    else{
    start.style.display = 'none';
    hit.style.display = 'inline';
    stay.style.display = 'inline';
    cancel.style.display = 'inline';
    yielding.style.display = 'inline';
    }
}

//response to the start button
start.addEventListener('click', function(){
    collectUsername();

    gameStarted = true;
    deck = createDeck(suits, values);
    shufflecard(deck);
    playerCards = [getCard(), getCard()];
    dealerCards = [getCard(), getCard()];
    arrangement();
    whoWins();
    isGameOver();
    
    
})

//response to the cancel button
cancel.addEventListener('click', function(){
    
    user.style.display = 'none';
    cancel.style.display = 'none';
    hit.style.display = 'none';
    stay.style.display = 'none';
    yielding.style.display = 'none';
    start.style.display = 'inline';
})

//response to the hit button
hit.addEventListener('click', function(){
    shufflecard(deck);
    playerCards.push(getCard());
    arrangement();
    whoWins();
    isGameOver();
})

//response to the stay button
stay.addEventListener('click', function(){
    shufflecard(deck);
    dealerCards.push(getCard());
    arrangement();
    whoWins();
    isGameOver();
})

//response to yield button
yield.addEventListener('click', function(){
    user.innerText += "\n" +
    "You yielded! You will receive 40% of your bet";
    gameOver = true;
    isGameOver();
})

