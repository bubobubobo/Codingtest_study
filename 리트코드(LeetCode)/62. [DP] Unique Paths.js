// 1. DP way
const uniquePaths = (m, n) => {
  const grid = Array.from(new Array(m), (_, i) =>
    i === 0 ? new Array(n).fill(1) : new Array(n).fill(0)
  );
  grid.forEach(row => {
    row[0] = 1;
  });

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[r][c] = grid[r - 1][c] + grid[r][c - 1];
    }
  }
  return grid[m - 1][n - 1];
};

const m = 3;
const n = 7;
console.log(uniquePaths(m, n));

// // 2. Mathematical way
// const factorial = n => {
//   let [fac, m] = [1, n];
//   while (m > 0) {
//     fac *= m;
//     m -= 1;
//   }
//   return fac;
// };

// const uniquePaths = (m, n) => factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));

// // 3. BFS way : time limit exceeded
// const uniquePaths = (m, n) => {
//   const grid = Array.from(new Array(m), (_, i) => new Array(n).fill(0));
//   grid[m - 1][n - 1] = 1;

//   const dr = [0, 1];
//   const dc = [1, 0];

//   const queue = [[0, 0]];

//   let cnt = 0;
//   while (queue.length) {
//     const [r, c] = queue.shift();
//     if (r === m - 1 && c === n - 1) cnt += 1;

//     for (let i = 0; i < 2; i++) {
//       const [nr, nc] = [r + dr[i], c + dc[i]];

//       if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
//       queue.push([nr, nc]);
//     }
//   }
//   return cnt;
// };
