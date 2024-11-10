'use strict';

// The number you are guessing
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }

  else if (score === 0) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }

  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
  }

  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
    }

  }
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
})
document.querySelector('.again').addEventListener
('click', function() {
  score = 20
  secretNumber = Math.trunc(Math.random()*20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

})
