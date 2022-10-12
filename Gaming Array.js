// https://www.hackerrank.com/challenges/an-interesting-game-1/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

function gamingArray(arr) {
  // Write your code here
  // bob : false, andy : true

  let turn = true;
  let gameState = [...arr];

  while (gameState.length) {
    gameState = gameState.slice(0, gameState.indexOf(Math.max(...gameState)));
    turn = !turn;
  }

  return turn ? 'ANDY' : 'BOB';
}

const arr = [2, 3, 5, 4, 1];
console.log(gamingArray(arr));
