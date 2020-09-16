let playerGuess = document.querySelector("#player-guess");
let submitButton = document.querySelector("#guess");
let messages = document.querySelector("#messages");
let guessesDiv = document.querySelector("#previous-guesses")
let numGuessesSpan = document.querySelector("#num-guesses")
let winsSpan = document.querySelector("#wins")
let lossesSpan = document.querySelector("#losses")
let replayButton = document.querySelector("#replay")

let min = 1
let max = 20
let guessedNumbers = new Set();
let secret = secretNumber(min, max);
let numGuesses = 0
let maxGuesses = 5
let playerWins = 0
let playerLosses = 0

submitButton.addEventListener('click', guess);
replayButton.addEventListener('click', replay);

function addToGuesses(num){
	guessedNumbers.add(num);
  numGuesses++;
  guessesDiv.textContent = new Array(...guessedNumbers).join(', ')
}

function secretNumber(min, max){
	return Math.floor(Math.random() * (max-min)) + min;
}

function checkValid(num){
	if(num > max){
  	print(`${num} is too big`, cls="alert alert-warning");
    return false;
  }
  else if(num < min){
  	print(`{num} is to small`, cls="alert alert-warning");
    return false;
  }
  else if(guessedNumbers.has(num)){
  	print(`You've already guessed ${num}`, cls="alert alert-warning")
    return false;
  }
  else if(numGuesses >= maxGuesses){
  	print(`You've made ${numGuesses} guesses, all out of tries!`, cls="alert alert-danger");
    return false;
  }
  else {
  	return true;
  }

}

function print(msg, cls = "alert"){
	messages.textContent = msg;
  messages.className = cls;
}

function guess(){
	let currentGuess = playerGuess.value;
  if(checkValid(currentGuess)){
  	addToGuesses(currentGuess);
    numGuessesSpan.textContent = numGuesses
  	if(currentGuess == secret){
  		print(`Guess: ${currentGuess}. You win!`, cls="alert alert-success");
      playerWins ++;
      winsSpan.textContent = playerWins;
  	} else if(numGuesses >= maxGuesses){
    	print(`Wrong! Out of guesses ... guess you lost.`, cls="alert alert-danger");
      playerLosses ++;
      lossesSpan.textContent = playerLosses;
    }
    else if(currentGuess > secret) {
  		print(`Guess: ${currentGuess}. High!`, cls="alert alert-primary");
  	}
    else {
  		print(`Guess: ${currentGuess}. Low.`, cls="alert alert-primary");
  	}
  }
}

function replay(){
	guessedNumbers.clear();
  numGuesses = 0;
  print("");
  guessesDiv.textContent = ""
  numGuessesSpan.textContent = 0
  secret = secretNumber(min,max)
  playerGuess.value = ""
}
