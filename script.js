
// pseudocode below
/* 
    create a score object that holds the player and computers score
    create a method in the object that counts the scores and announces a winner
    inside an event listener on a button that says let's play:
    prompt user for either rock/paper/scissors and convert string to lowercase
    make a switch statement that will handle the answer and check if it's a proper answer (string/ and actually rock paper or scissors) 
    store users response in a variable called userInput
    create a function that generates a random number between 1-3
    if 1 then assign the string 'rock' to a variable called computerResponse
    if 2 then paper assign the string 'paper' to a variable called computerResponse
    if 3 then scissors assign the string 'scissors' to a variable called computerResponse
    return computerResponse to a variable
    create a function that takes both the userInput and computerResponse as parameters
    create a switch statement to determine results of rock paper scissors
    create a case statement that compares if the userInput and computerResponse are the same
    if they are the same then return tie and don't add any points
    else run a switch statement with a expression of true so we can make comparisons of each case
    each case should be a valid rock paper scisccors scenario between the user and computer (exlcuding a tie)
    example: case userInput === 'rock' && computerResponse === 'paper': 
    outputs to the console 'computer picked ${computerResponse}, ${computerResponse} beats ${userInput}, computer wins'
    then return results and tally a score
    create a new function that runs a while loop to run this above function until someone's score is 3 (for best 3 out of 5)
    then break out of function

*/

//global variables

const playButton = document.getElementById('play'); //grabs our button so we can attach an event listener later

let userInput; //create a userInput variable that will hold the user's prompt response
let computersResponse; //create a computer response variable that will hold the computer's randomly assigned decision

let score = {  // a score object that keeps track of our scores and also has a checkscore function that let's the user know scores 
    userScore: 0,
    computerScore: 0,
    dynamite: true,
    checkScore: function() {
        if (this.userScore === 3) {
            return alert(`You won the game!`);
        } else if (this.computerScore === 3) {
            return alert(`You lost the game...`);
        } else {
            return alert(`The current score is:
                you: ${this.userScore}
                me: ${this.computerScore}`);
        }
    }
};

function getRandomNumber(min, max) {  // pretty straight forward random number generator function it's from W3school
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  let generateResponse = () => { // function declaration that essentially creates the computer's decision based on the random number from the previous function
    let computersResponse = getRandomNumber(1, 4);
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

let getUserResponse = () => { //function declaration to get rock paper or scissors from user
    userInput = prompt('rock? paper? or scissors?').toLowerCase(); //actual prompt and converts answer to lowercase so it can be case insensitive
    switch(userInput) { //switch statement that properly assigns variable.... not even sure if this is needed.... but it was fun
        case 'rock': 
            userInput = 'rock';
            break;
        case 'paper':
            userInput = 'paper';
            break;
        case 'scissors':
            userInput = 'scissors';
            break;
        case 'dynamite': //easter egg for me because why not?
            alert(`we'll see how this goes...`);
            userInput = 'dynamite';
            break;
        default: //if the answer wasn't either rock paper or scissors (or dynamite) then we have to reject that answer
            alert(`let's try that again, click the button again and please use only rock paper or scissors`);
            userInput = null;
            console.log(userInput);
    }
    return userInput; //returns the user's response 
};

function playRound(user, computer) { //function expression that is passed both the userInput and computerResponse variables as parameters
        switch(true) { //switch statement that evaluates who wins based on the arguments inputed; adds a point to the corresponding winner's score
            case (user === 'rock' && computer === 'scissors'):
                alert(`you win this round! computer picked ${computer}`);
                score.userScore += 1;
                break;
            case (user === 'paper' && computer === 'rock'):
                alert(`you win this round! computer picked ${computer}`);
                score.userScore += 1;
                break;
            case (user === 'scissors' && computer === 'paper'):
                alert(`you win this round! computer picked ${computer}`);
                score.userScore += 1;
                break;
            case (user === 'rock' && computer === 'paper'):
                alert(`you lose this round... computer picked ${computer}`);
                score.computerScore += 1;
                break;
            case (user === 'paper' && computer === 'scissors'):
                alert(`you lose this round... computer picked ${computer}`);
                score.computerScore += 1;
                break;
            case (user === 'scissors' && computer === 'rock'):
                alert(`you lose this round... computer picked ${computer}`);
                score.computerScore += 1;
                break;
            case (computer === user): //if tie, the no points added to scores
                alert(`it's a tie!`);
                break;
            case user === 'dynamite': // almighty winner keyword
                score.userScore += 3;
                break;
        }
        return score; //returns the score 
}

let roundHelper = () => { // helper function that uses the above functions and combines them all into one for each round
    playRound(getUserResponse(), generateResponse()); //passing previous functions as arguments to the playround function
};

function game() { //function that contains a while loop that will run our roundHelper function and check the score method until someone get's to 3.
 while (true) {
        roundHelper();
        score.checkScore();
        if (score.userScore === 3) break;
        if (score.computerScore === 3) break;
    }
    score.userScore = 0; //resets the scores once the game is 'over'
    score.computerScore = 0;
}


console.log(`boom! goes the...`); 

// main event listener to start game
playButton.addEventListener('click', () => {
    game();
});











