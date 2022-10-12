// const solution = arr =>
//   Array.from(
//     arr.join('').replace(/([0-9])\1{1,}/g, match => match[0]),
//     v => +v
//   );

const solution = arr => {
  const res = [];
  let cur = null;
  arr.forEach(v => {
    if (v === cur) return;
    res.push(v);
    cur = v;
  });
  return res;
};

const arr = [1, 1, 3, 3, 0, 1, 1];
console.log(solution(arr));
