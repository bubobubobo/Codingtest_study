const spiralOrder = matrix => {
  const directions = ['right', 'down', 'left', 'up'];
  let dir = 0;

  let [top, right, bottom, left] = [0, matrix[0].length - 1, matrix.length - 1, 0];

  const spiral = [];
  while (top < bottom || left < right) {
    // 1. move
    if (directions[dir] === 'right') {
      for (let i = left; i <= right; i++) {
        spiral.push(matrix[top][i]);
      }
      top += 1;
      dir = (dir + 1) % 4;
    } else if (directions[dir] === 'down') {
      for (let i = top; i <= bottom; i++) {
        spiral.push(matrix[i][right]);
      }
      right -= 1;
      dir = (dir + 1) % 4;
    } else if (directions[dir] === 'left') {
    } else if (directions[dir] === 'up') {
    }

    // 2. check to change dir
  }
};

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix1));
// console.log(spiralOrder(matrix2));
