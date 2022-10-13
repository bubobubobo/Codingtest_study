const solution = (absolutes, signs) =>
  absolutes.map((v, i) => v * (signs[i] ? 1 : -1)).reduce((sum, v) => sum + v, 0);

const absolutes = [4, 7, 12];
const signs = [true, false, true];
console.log(solution(absolutes, signs));
