const integerBreak = function (n) {
  const maxProducts = Array.from(new Array(n + 1), () => new Array(n + 1));
  maxProducts.forEach((row, i) => {
    [row[0], row[1], row[i]] = [0, i, 1];
  });
  // key idea
  // (i를 j개로 쪼갰을 때 최댓값) = Math.max(
  //  1 x (i - 1을 j - 1개로 쪼갰을 때 최댓값),
  //  ...
  //  i - j + 1 x (j - 1을 j - 1개로 쪼갰을 때 최댓값))
  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      const products = [];
      for (let k = 1; k <= i - j + 1; k++) {
        products.push(k * maxProducts[i - k][j - 1]);
      }
      maxProducts[i][j] = Math.max(...products);
    }
  }
  return Math.max(...maxProducts[n].slice(2));
};

const n = 10;
console.log(integerBreak(n));
