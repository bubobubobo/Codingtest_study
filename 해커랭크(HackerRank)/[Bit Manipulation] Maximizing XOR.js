// link : https://www.hackerrank.com/challenges/maximizing-xor/problem

function maximizingXor(l, r) {
  // Write your code here
  let maxXor = -Infinity;

  for (let i = l; i < r; i++) {
    for (let j = i + 1; j <= r; j++) {
      const tmp = i ^ j;
      maxXor = tmp > maxXor ? tmp : maxXor;
    }
  }
  return maxXor;
}

const l = 11;
const r = 12;
console.log(maximizingXor(l, r));
