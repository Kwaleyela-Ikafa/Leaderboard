const scoresList = [
  { name: 'Kwaleyela', score: 100 },
  { name: 'David', score: 80 },
  { name: 'Haamid', score: 100 },
  { name: 'Festus', score: 100 },
  { name: 'Musanzia', score: 75 },
];

const displayScores = () => {
  const scoreContainer = document.getElementById('scores');
  scoreContainer.innerHTML = '';
  scoresList.forEach((user) => {
    scoreContainer.innerHTML += `
      <li>
      <p>${user.name}: ${user.score}</p>
      </li>
      `;
  });
};

exports.displayScores = displayScores;