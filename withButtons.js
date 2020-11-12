//same task as normal script.js page but with buttons

//global variables

const playButton = document.querySelector('#play');
const choiceButtonsContainer = document.querySelector('#gameContainer');
const choiceButtons = document.querySelectorAll('#choice');
const infoArea = document.querySelector('#infoArea');
let userInput;

let score = {  // a score object that keeps track of our scores and also has a checkscore function that let's the user know scores 
    userScore: 0,
    computerScore: 0,
    dynamite: true,
    checkScore: function() {
        let currentScores = document.querySelector('#scoreBoard');
        let ul = document.querySelector(`ul`);
        if (this.userScore === 5) {
         currentScores.innerHTML =  `<h2>You won the game!</h2>`;
         ul.textContent = '';
        } else if (this.computerScore === 5) {
             currentScores.innerHTML =  `<h2>You lost the game...</h2>`;
             ul.textContent = '';
        } else {
             currentScores.innerHTML = `
            <p>your score: ${this.userScore}</p> 
            <p>my score: ${this.computerScore}</p>     
        `;
        }
    }
};

//function declarations

let generateResponse = () => { // function declaration that essentially creates the computer's decision based on the random number from the previous function
let computersResponse = Math.floor(Math.random() * 3) + 1;
switch(true) { //switch statement deals with whatever randomly generated number we got and assigns 1-3 to rock-paper-scissors respectively
    case computersResponse === 1:
        computersResponse = 'rock';
        console.log(computersResponse);
        break;
    case computersResponse === 2:
        computersResponse = 'paper';
        console.log(computersResponse);
        break;
    case computersResponse === 3:
        computersResponse = 'scissors';
        console.log(computersResponse);
        break;
}
return computersResponse; //returns the generated response back 
};

function playVisibility() {
    choiceButtonsContainer.classList.toggle('hidden');
    playButton.classList.toggle('hidden');
    makeContent();
}

function makeContent() {
    const announcer = document.createElement('ul');
    let scoreBoard = document.createElement('div');
    const resetButton = document.createElement('button');
    scoreBoard.setAttribute('id', 'scoreBoard');
    resetButton.setAttribute('id', 'reset');
    resetButton.textContent = `RESET`;
    infoArea.append(announcer);
    infoArea.append(scoreBoard);
    infoArea.append(resetButton);
}

function hideVisibility(e) {
    if (e.target.id === 'reset') {
        zeroScores();
    while (infoArea.firstChild) {
        infoArea.removeChild(infoArea.firstChild);
    }
    if (choiceButtonsContainer.classList.contains('hidden') && playButton.classList.contains('hidden')) {
        playButton.classList.toggle('hidden');
    } else if(!choiceButtonsContainer.classList.contains('hidden') && playButton.classList.contains('hidden')) {
        playButton.classList.toggle('hidden');
        choiceButtonsContainer.classList.toggle('hidden');
    }
    } else return
}

function playRound(user, computer) { //function expression that is passed both the userInput and computerResponse variables as parameters
    const logKeeper = document.querySelector(`ul`);
    let li = document.createElement('li');
    switch(true) { //switch statement that evaluates who wins based on the arguments inputed; adds a point to the corresponding winner's score
        case (user === 'rock' && computer === 'scissors'):
            li.textContent = (`you win this round! computer picked ${computer}`);
            logKeeper.append(li);
            score.userScore += 1;
            break;
        case (user === 'paper' && computer === 'rock'):
            li.textContent = (`you win this round! computer picked ${computer}`);
            logKeeper.append(li);
            score.userScore += 1;
            break;
        case (user === 'scissors' && computer === 'paper'):
            li.textContent = (`you win this round! computer picked ${computer}`);
            logKeeper.append(li);
            score.userScore += 1;
            break;
        case (user === 'rock' && computer === 'paper'):
            li.textContent = (`you lose this round... computer picked ${computer}`);
            logKeeper.append(li);
            score.computerScore += 1;
            break;
        case (user === 'paper' && computer === 'scissors'):
            li.textContent = (`you lose this round... computer picked ${computer}`);
            logKeeper.append(li);
            score.computerScore += 1;
            break;
        case (user === 'scissors' && computer === 'rock'):
            li.textContent = (`you lose this round... computer picked ${computer}`);
            logKeeper.append(li);
            score.computerScore += 1;
            break;
        case (computer === user): //if tie, the no points added to scores
            li.textContent = (`it's a tie!`);
            logKeeper.append(li);
            break;
    }
    return score; //returns the score 
}

function compareAnswers(e) {
    userInput = e.target.textContent;
    playRound(userInput, generateResponse());
    score.checkScore();
    isGameOver();
}

function isGameOver() {
    let message = document.querySelector('#scoreBoard');
    if (message.textContent === `You won the game!` || message.textContent === `You lost the game...`) {
        zeroScores();
        choiceButtonsContainer.classList.toggle('hidden');
    } else console.log(`keep playing`);
}

function zeroScores() {
    score.userScore = 0;
    score.computerScore = 0;
}


//event handling

playButton.addEventListener('click', (playVisibility));

infoArea.addEventListener('click', hideVisibility);

//game loop

choiceButtons.forEach(button => button.addEventListener('click', compareAnswers));