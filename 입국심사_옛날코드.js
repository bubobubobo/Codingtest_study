function solution(n, times) {
  let low = 1;
  let high = Math.max(...times) * n;
  let res = 0;
  while (low <= high) {
    const mid = parseInt((low + high) / 2);
    let count = 0;
    for (const t of times) {
      count += parseInt(mid / t);
    }
    if (count >= n) {
      res = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return res;
}
