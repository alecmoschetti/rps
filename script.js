
// pseudocode below
/* 
    inside an event listener on a button that says let's play:
    prompt user for either rock/paper/scissors
    check the typeof to make sure its a string else say please use only letters
    convert string to lowercase and make sure the answer is only rock paper or scissors else say pick only rock paper or scissors
    store users response in a variable called userInput
    create a function that generates a random number between 1-3
    if 1 then assign the string 'rock' to a variable called computerResponse
    if 2 then paper assign the string 'paper' to a variable called computerResponse
    if 3 then scissors assign the string 'scissors' to a variable called computerResponse
    return computerResponse
    create a function that takes both the userInput and computerResponse as parameters
    create an if statement that compares if the userInput and computerResponse are the same
    if they are the same then return tie
    else run a switch statement with a expression of true so we can make comparisons of each case
    each case should be a valid rock paper scisccors scenario between the user and computer (exlcuding a tie)
    example: case userInput === 'rock' && computerResponse === 'paper': 
    outputs to the console 'computer picked ${computerResponse}, ${computerResponse} beats ${userInput}, computer wins'
    then return results 
    create a new function that runs a for loop to run this above function 5 times
    each time through the loop storing who wins in a counter variable for both the user and computer
    if counter reaches 3 for either user or computer then console log which player won.
    then break out of function

*/









