// 무식한 풀이
// const solution = (n, times) => {
//   const maxTime = Math.max(...times) * n;
//   for (let t = 1; t < maxTime; t++) {
//     if (times.reduce((sum, time) => sum + Math.floor(t / time), 0) >= n) return t;
//   }
// };

const solution = (n, times) => {
  let [left, right, mid, res] = [0, Math.max(...times) * n, 0, 0];

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    // const total = Math.add(...times.map(time => Math.floor(mid / time)));
    let total = 0;
    for (const time of times) {
      total += Math.floor(mid / time);
    }
    if (total >= n) {
      res = mid;
      right = mid - 1;
    }
    if (total < n) left = mid + 1;
  }

  return res;
};

const n = 17;
const times = [7, 10];
console.log(solution(n, times));
