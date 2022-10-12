const solution = n => {
  let answer = 0;

  const isValid = (board, row) => {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    return true;
  };

  const dfs = (board, row) => {
    if (row === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i;
        if (isValid(board, row + 1)) dfs(board, row + 1);
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    const board = new Array(n + 1).fill(0);
    board[1] = i;
    dfs(board, 1);
  }

  return answer;
};

const n = 4;
console.log(solution(n));
