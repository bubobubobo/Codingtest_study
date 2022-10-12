function solution(weights) {
  weights.sort((a, b) => a - b);

  const mobile = [];
  if (weights[0] === weights[1]) {
    mobile.push(weights[0], weights[1]);
    weights = weights.slice(2);
  }

  weights;
  const sum = weights.reduce((sum, cur) => sum + cur, 0);
  sum;
}

const weights = [2, 2, 2, 2, 3, 3, 5, 6]; // 4
console.log(solution(weights));
