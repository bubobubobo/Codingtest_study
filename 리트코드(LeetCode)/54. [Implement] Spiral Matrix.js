const spiralOrder = matrix => {
  const directions = ['right', 'down', 'left', 'up'];
  let dir = 0;

  let [top, right, bottom, left] = [0, matrix[0].length - 1, matrix.length - 1, 0];
  // base case
  if (top === bottom) return matrix[0];
  if (left === right) return matrix.map(row => row[0]);

  // else
  const spiral = [];
  while (top < bottom || left < right) {
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
      for (let i = right; i >= left; i--) {
        spiral.push(matrix[bottom][i]);
      }
      bottom -= 1;
      dir = (dir + 1) % 4;
    } else if (directions[dir] === 'up') {
      for (let i = bottom; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }
      left += 1;
      dir = (dir + 1) % 4;
    }

    if (top > bottom || left > right) break;
  }
  if (top === bottom && left === right) spiral.push(matrix[top][left]);
  return spiral;
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
const matrix3 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
];
console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2));
console.log(spiralOrder(matrix3));
