

const rotate = (matrix, rowSt, colSt, rowEn, colEn) => {
  let minVal = matrix[rowSt - 1][colSt - 1];
  let memory = minVal;
  for (let i = 1; i <= colEn - colSt; i++) {
    if (matrix[rowSt - 1][colSt + i - 1] < minVal) minVal = matrix[rowSt - 1][colSt + i - 1];
    [memory, matrix[rowSt - 1][colSt + i - 1]] = [matrix[rowSt - 1][colSt + i - 1], memory];
  }
  for (let i = 1; i <= rowEn - rowSt; i++) {
    if (matrix[rowSt + i - 1][colEn - 1] < minVal) minVal = matrix[rowSt + i - 1][colEn - 1];
    [memory, matrix[rowSt + i - 1][colEn - 1]] = [matrix[rowSt + i - 1][colEn - 1], memory];
  }
  for (let i = 1; i <= colEn - colSt; i++) {
    if (matrix[rowEn - 1][colEn - i - 1] < minVal) minVal = matrix[rowEn - 1][colEn - i - 1];
    [memory, matrix[rowEn - 1][colEn - i - 1]] = [matrix[rowEn - 1][colEn - i - 1], memory];
  }
  for (let i = 1; i <= rowEn - rowSt; i++) {
    if (matrix[rowEn - i - 1][colSt - 1] < minVal) minVal = matrix[rowEn - i - 1][colSt - 1];
    [memory, matrix[rowEn - i - 1][colSt - 1]] = [matrix[rowEn - i - 1][colSt - 1], memory];
  }
  return minVal;
};

const solution = (rows, columns, queries) => {
  const matrix = Array.from(new Array(rows), (_, i) =>
    new Array(columns).fill().map((_, j) => i * columns + j + 1)
  );
  const minVals = [];
  queries.forEach(query => {
    minVals.push(rotate(matrix, ...query));
  });
  return minVals;
};

const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];
console.log(solution(rows, columns, queries));
