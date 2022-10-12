// https://www.hackerrank.com/challenges/flipping-the-matrix/problem

function flippingMatrix(matrix) {
  let maxSum = 0;

  const matSize = matrix.length;
  const batchSize = matSize / 2;
  // add corner max values for all n x n elements
  for (let i = 0; i < batchSize; i++) {
    for (let j = 0; j < batchSize; j++) {
      maxSum += Math.max(
        matrix[i][j],
        matrix[i][matSize - j - 1],
        matrix[matSize - i - 1][j],
        matrix[matSize - i - 1][matSize - j - 1]
      );
    }
  }

  return maxSum;
}

const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
console.log(flippingMatrix(matrix));
