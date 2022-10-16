const climbStairs = n => {
  const steps = [1, 1];
  for (let stairs = 2; stairs <= n; stairs++) {
    steps[stairs] = steps[stairs - 2] + steps[stairs - 1];
  }
  return steps[n];
};

const n = 3;
console.log(climbStairs(n));
