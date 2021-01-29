// All the elements on the page we'll work with
let flipBtn = document.querySelector('#flipBtn');
let results = document.querySelector('#results');
let flipMessage = document.querySelector('#flipMessage');
let winMessage = document.querySelector('#winMessage');
let loseMessage = document.querySelector('#loseMessage');


flipBtn.addEventListener('click', flip);

function flip() {

    // Which radio to the player choose - heads or tails?
    let playerChoice = document.querySelector('input[name="choice"]:checked').value;

    // The computer randomly chooses ("flips") heads or tails
    let sides = ['heads', 'tails'];
    let random = Math.floor(Math.random() * 2);
    let flip = sides[random];

    // Player wins if their choice matches the flip
    let win = playerChoice == flip;

    // Update the page
    flipMessage.innerHTML = flip;

    // Briefly hide and then show the results again
    // This way when the results are the same as the previous round
    // It doesn't look like nothing happens when the button is clicked
    results.style.display = 'none';
    setTimeout(function () {
        results.style.display = 'block';
    }, 100);

    // Show the appropriate win or lose message
    if (win) {
        winMessage.style.display = 'block';
        loseMessage.style.display = 'none';
    } else {
        winMessage.style.display = 'none';
        loseMessage.style.display = 'block';
    }
}

