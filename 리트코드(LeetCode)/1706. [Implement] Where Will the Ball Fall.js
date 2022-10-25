const findBall = grid => {
  /**
   * 현재 공이 있는 곳의 grid에 따라 다음 row의 위치가 결정됨
   * 1. 0일 때 -1이거나, 1이고 1의 값이 -1인 경우 stuck
   * 2. length - 1일 때 1이거나, -1이고 length - 2의 값이 1인 경우 stuck
   * 3. 나머지 경우 1이고 다음 값이 -1이거나, -1이고 이전 값이 1인 경우 stuck
   *
   * strategy : checkStuck 함수 작성해 매 row마다 체크 => 마지막 col 결정
   */
  const TOTAL_POS = grid[0].length;
  const ROWS = grid.length;

  // base case
  if (TOTAL_POS === 1) return [-1];

  const isStuck = (row, pos) => {
    if (pos === 0) {
      if (grid[row][pos] === -1) return true;
      if (grid[row][pos] === 1 && grid[row][pos + 1] === -1) return true;
    } else if (pos === TOTAL_POS - 1) {
      if (grid[row][pos] === 1) return true;
      if (grid[row][pos] === -1 && grid[row][pos - 1] === 1) return true;
    } else {
      if (grid[row][pos] === 1 && grid[row][pos + 1] === -1) return true;
      if (grid[row][pos] === -1 && grid[row][pos - 1] === 1) return true;
    }
    return false;
  };

  const resPos = [];

  for (let col = 0; col < TOTAL_POS; col++) {
    let pos = col;
    let row;
    for (row = 0; row < ROWS; row++) {
      if (isStuck(row, pos)) break;
      pos += grid[row][pos];
    }
    resPos.push(row === ROWS ? pos : -1);
  }

  return resPos;
};

const grid = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];
console.log(findBall(grid));
