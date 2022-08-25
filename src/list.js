const scoreContainer = document.getElementById('scores');
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2abce/scores/';

let scoresArray = [];

const gameScores = async () => {
  const request = new Request(requestURL);
  const response = await fetch(request)
    .then((res) => res.json())
    .then((data) => data.result)
    .catch(() => 'error');
  return response;
};

const displayScores = () => {
  gameScores().then((res) => {
    if (typeof res === 'object') {
      scoresArray = Array.from(res);
      scoreContainer.innerHTML = '';
      if (scoresArray.length > 0) {
        scoresArray.forEach((score) => {
          scoreContainer.innerHTML += `<li><p>${score.user}: ${score.score}</p></li>`;
        });
      }
    }
  });
};

const updateScore = async (data) => {
  await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
};

exports.gameScores = gameScores;
exports.displayScores = displayScores;
exports.updateScore = updateScore;
