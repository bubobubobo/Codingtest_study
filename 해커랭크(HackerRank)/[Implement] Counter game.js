// link : https://www.hackerrank.com/challenges/counter-game/problem

function counterGame(n) {
  // Write your code here
  const players = ['Louise', 'Richard'];
  let num = n;
  let turn = 0;

  const getMaxPowerOfTwo = n => {
    let num = 1;
    while (num < n) {
      num *= 2;
    }
    return n === num ? num : num / 2;
  };

  // get number and return result value
  const takeTurn = () => {
    turn = (turn + 1) % 2;

    const maxPowerOfTwo = getMaxPowerOfTwo(num);
    if (num === maxPowerOfTwo) num /= 2;
    else num -= maxPowerOfTwo;
  };

  while (num !== 1) {
    takeTurn();
  }

  return players[(turn + 1) % 2];
}

console.log(counterGame(132));
