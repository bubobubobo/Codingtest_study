const FIRST_BAD_VERSION = 4;

const isBadVersion = n => n >= FIRST_BAD_VERSION;

const solution = function (isBadVersion) {
  return function (n) {
    let [left, right] = [1, n];
    let mid;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid) && mid === 1) return 1;

      if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;

      if (!isBadVersion(mid)) left = mid + 1;
      else right = mid;
    }
  };
};

const n = 5;
const firstBadVersion = solution(isBadVersion);
console.log(firstBadVersion(n));
