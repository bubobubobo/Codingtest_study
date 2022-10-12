// link : https://school.programmers.co.kr/learn/courses/30/lessons/12905

const solution = board => {
  /**
   * 네 칸이 존재할 때,
   * 하나라도 0이 있으면 => 자기자신
   * (모두 0이 아닌 경우)
   * 셋이 동일하면 => 그 수 + 1
   * (셋이 다른 경우) => min 값
   */

  let maxSize = 0;

  // base case
  if (board.length === 1) maxSize = Math.max(...board[0]);
  if (board[0].length === 1) maxSize = Math.max(...board.map(row => row[0]));

  for (let row = 1; row < board.length; row++) {
    for (let col = 1; col < board[0].length; col++) {
      const [a, b, c, d] = [
        board[row - 1][col - 1],
        board[row - 1][col],
        board[row][col - 1],
        board[row][col],
      ];
      if (a && b && c && d) board[row][col] = Math.min(a, b, c) + 1;
      maxSize = maxSize < board[row][col] ? board[row][col] : maxSize;
    }
  }
  return maxSize * maxSize;
};

// const board = [
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 1, 0],
// ];

const board = [[0, 1]];
console.log(solution(board));
