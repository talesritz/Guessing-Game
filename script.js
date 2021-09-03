'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = ' 🎉 Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').nodeValue);
document.querySelector('.guess').nodeValue = 23;

*/

// const secretNumber = Number((Math.random() * 21).toFixed(0));

document.querySelector('.again').addEventListener('click', function () {
  //resets score to 20
  document.querySelector('.score').textContent = 20;
  //resets background color to black
  document.querySelector('body').style.backgroundColor = '#222';
  // resets number width to 15rem (orignal size)
  document.querySelector('.number').style.width = '15rem';
  //resets center number to a "?"
  document.querySelector('.number').textContent = '?';
  //resets message back to what it was before
  document.querySelector('.message').textContent = 'Start guessing...';
  //empty the value box above Check
  document.querySelector('.guess').value = '';
  //sort a new secret number
  secretNumber = randomNumber();
});

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

var secretNumber = randomNumber();
var score = Number(document.querySelector('.score').textContent);

const scorenow = function () {
  if (score === 0) {
    score = 0;
  } else {
    score -= 1;
    document.querySelector('.score').textContent = score;
  }
};

// console.log(secretNumber, typeof secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //While the score is still above 0, game keeps going
  if (score > 1) {
    //if there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '⛔  No number!';
      scorenow();

      //if the guess is right
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = ' 🎉 Correct Number';

      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      //if the guess is higher
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '⏫ Too high!';
      scorenow();

      //if the guess is lower
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '⏬ Too Low';
      scorenow();
    }
  } else {
    scorenow();
    document.querySelector('.message').textContent = '📕 You lost the game!';
  }
});
