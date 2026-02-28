const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let rand = Math.floor(Math.random() * 100) + 1;

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100');
    return;
  }

  prevGuess.push(guess);
  displayGuess(guess);
  checkGuess(guess);
}

function checkGuess(guess) {
  if (guess === rand) {
    displayMsg('You guessed it right!!');
    endGame();
  } else if (numGuess === 11) {
    displayMsg(`Game Over! Random number was ${rand}`);
    endGame();
  } else if (guess < rand) {
    displayMsg('Number is too low');
  } else {
    displayMsg('Number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  p.innerHTML = `<button id="newGame" class="button2">New Game</button>`;
  startOver.appendChild(p);

  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');

  newGameBtn.addEventListener('click', function () {
    rand = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 1;

    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';

    userInput.removeAttribute('disabled');
    userInput.value = '';

    startOver.removeChild(p);

    playGame = true;
  });
}