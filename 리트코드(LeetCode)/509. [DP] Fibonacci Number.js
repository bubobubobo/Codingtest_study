const fib = n => {
  const fibNums = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibNums[i] = fibNums[i - 2] + fibNums[i - 1];
  }
  return fibNums[n];
};

const n = 9;
console.log(fib(n));
