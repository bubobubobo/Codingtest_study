const getLeastDivider = n => {
  let d = 2;
  while (n % d) d += 1;
  return d;
};

// 1을 뺀 수의 약수 중 1이 아닌 최솟값
const solution = n => getLeastDivider(n - 1);

const n = 10;
console.log(solution(n));
