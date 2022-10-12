// link : https://school.programmers.co.kr/learn/courses/30/lessons/87391

const travel = (n, m, x, y, queries) => {
  let [curRow, curCol] = [x, y];
  const left = dx => {
    curCol = curCol < dx ? 0 : curCol - dx;
  };
  const right = dx => {
    curCol = curCol + dx >= m ? m - 1 : curCol + dx;
  };
  const up = dx => {
    curRow = curRow < dx ? 0 : curRow - dx;
  };
  const down = dx => {
    curRow = curRow + dx >= n ? n - 1 : curRow + dx;
  };

  const move = ([dir, dx]) => {
    if (dir === 0) left(dx);
    if (dir === 1) right(dx);
    if (dir === 2) up(dx);
    if (dir === 3) down(dx);
  };

  queries.forEach(query => move(query));
  return [curRow, curCol];
};

const solution = (n, m, x, y, queries) => {
  let cnt = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      const [resRow, resCol] = travel(n, m, row, col, queries);
      if (resRow === x && resCol === y) cnt += 1;
    }
  }
  return cnt;
};

// const n = 2;
// const m = 2;
// const x = 0;
// const y = 0;
// const queries = [
//   [2, 1],
//   [0, 1],
//   [1, 1],
//   [0, 1],
//   [2, 1],
// ];
const n = 2;
const m = 5;
const x = 0;
const y = 1;
const queries = [
  [3, 1],
  [2, 2],
  [1, 1],
  [2, 3],
  [0, 1],
  [2, 1],
];
console.log(solution(n, m, x, y, queries));
