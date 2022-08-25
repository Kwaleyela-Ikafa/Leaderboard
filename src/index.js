import './style.css';
import { updateScore, displayScores } from './list.js';

const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  displayScores();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[type = "text"]').value;
  const userScore = form.querySelector('input[type = "number"]').value;
  if (name !== '' && userScore !== '') {
    const data = {
      user: name,
      score: userScore,
    };
    updateScore(data);
    form.reset();
  }
});

displayScores();
