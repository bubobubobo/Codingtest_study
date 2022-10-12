const productSum = (A, B) => {
  if (!A.length * B.length) return -1;
  let res = 0;
  A.forEach((n, i) => {
    res += n * B[i];
  });
  return res;
};

const solution = (A, B) => {
  const arr1 = [...A].sort((a, b) => a - b);
  const arr2 = [...B].sort((a, b) => b - a);
  return productSum(arr1, arr2);
};

const A = [1, 2];
const B = [3, 4];
console.log(solution(A, B));
