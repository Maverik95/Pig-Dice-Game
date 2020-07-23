/*
GAME RULES:

-The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his round score
- But if the player rolls a 1, all his round score gets lost. After that, its the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that,
its the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// Declare variables
var totalScore, currentScore, activePlayer, gamePlaying;

totalScore = [0,0,0];
roundScore = 0;
activePlayer = 1;
gamePlaying = true;


/*
document.querySelector("#CurScore-" + activePlayer).textContent = dice

// If we wanted to input an HTML element, we use the innerHTML method
//document.querySelector("#CurScore-" + activePlayer).innerHTML = '<em>' + dice + '<em>'

// We can also read a value that has already been set
// The following assigns the value of the total Score to a variable x
var x = document.querySelector("#totScore-1").textContent;
console.log(x)
*/

var x = document.querySelector(".dice").style.display = 'none';


// Adding event listener to the roll dice element
document.querySelector(".btn-rollDice").addEventListener('click', function() {
    
    if (gamePlaying){
         // Random number
        var dice = Math.floor(Math.random() * 6) + 1
        console.log(dice)
        // Display the result
        var diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block'
        diceDom.src = 'images/' + 'dice-' + dice + '.png'
        console.log(diceDom.src)

        //Add current scores
        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#CurScore-' + activePlayer).textContent = roundScore;
        } else{
        nextPlayer()
        }

    }
})

document.querySelector(".btn-Hold").addEventListener('click', function(){
        
    if(gamePlaying){
            totalScore[activePlayer] += roundScore;
        document.querySelector('#totScore-' + activePlayer ).textContent = totalScore[activePlayer]

        if(totalScore[activePlayer] >= 20){
            document.querySelector('.player-' + activePlayer).textContent = 'You Win!!!'
            document.querySelector('.dice').style.display = 'none'
            gamePlaying = false;
        } else{
            nextPlayer()
        }

    }
        
})

function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0

    document.getElementById('CurScore-1').textContent = 0
    document.getElementById('CurScore-2').textContent = 0

    document.querySelector('.player1').classList.toggle('active') 
    document.querySelector('.player2').classList.toggle('active')

    document.querySelector('.player-1').classList.toggle('present') 
    document.querySelector('.player-2').classList.toggle('present')

    document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-newGame').addEventListener('click', function() {
    
    gamePlaying = true;
    roundScore = 0
    totalScore = [0,0,0]
    activePlayer = 1;

    document.querySelector('.player-1').textContent = 'PLAYER1'
    document.querySelector('.player-2').textContent = 'PLAYER2'

    document.getElementById('CurScore-1').textContent = 0
    document.getElementById('CurScore-2').textContent = 0

    document.querySelector('#totScore-1' ).textContent = 0
    document.querySelector('#totScore-2' ).textContent = 0

    document.querySelector('.dice').style.display = 'none'

    document.querySelector('.player1').classList.remove('active')
    document.querySelector('.player2').classList.remove('active')
    document.querySelector('.player-1').classList.remove('present')
    document.querySelector('.player-2').classList.remove('present')
    document.querySelector('.player1').classList.add('active')
    document.querySelector('.player-1').classList.add('present')
    
    
})

