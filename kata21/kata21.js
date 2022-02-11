let prompt = require("prompt-sync")({ sigint: true });

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;

// array to push guesses to see if it was used before
let guesses = [];
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
// loop to go through guesses logic
while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt("Guess a number from 1 to 10: ");
  // Convert the string input to a number
  guess = Number(guess);
  // when guess is smaller than number
  if (guess < numberToGuess) {
    guesses.push(guess);
    console.log("Too low!");
    // when guess is larger than number
  } else if (guess > numberToGuess) {
    guesses.push(guess);
    console.log("Too high!");
    // Compare the guess to the secret answer and let the user know.
  } else if (guess === numberToGuess) {
    console.log(`You got it! You took ${guesses.length} attempts!`);
    console.log(`Here are your previous ${guesses} guesses.`);
    foundCorrectNumber = true;
  } else {
    console.log("Not a number. Try again!");
  }
}
