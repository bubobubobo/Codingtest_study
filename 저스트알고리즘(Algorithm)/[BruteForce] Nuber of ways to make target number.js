// link : https://www.geeksforgeeks.org/number-of-ways-to-calculate-a-target-number-using-only-array-elements/

const findTotalWays = (arr, i, k) => {
  if (k === 0 && i === arr.length) return 1;

  if (i === arr.length) return 0;

  return (
    findTotalWays(arr, i + 1, k) +
    findTotalWays(arr, i + 1, k - arr[i]) +
    findTotalWays(arr, i + 1, k + arr[i])
  );
};

const arr = [-3, 1, 3, 5];
const k = 6;
console.log(findTotalWays(arr, 0, k));
