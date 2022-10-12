// 가장 많은 숫자를 사용해서 주어진 값 n을 만들 때 사용된 숫자의 개수를 반환

const makeN = (arr, i, n, used) => {
  if (i === arr.length && n === 0) return used.length;

  if (i === arr.length) return 0;

  return Math.max(makeN(arr, i + 1, n, used), makeN(arr, i + 1, n - arr[i], [...used, arr[i]]));
};

const solution = (arr, n) => makeN(arr, 0, n, []);

const arr = [1, 2, 2, 1, 1, 1, 5, 6, 7];
const n = 4;
console.log(solution(arr, n));
