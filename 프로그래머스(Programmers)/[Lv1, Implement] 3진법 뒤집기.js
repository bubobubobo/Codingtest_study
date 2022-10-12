// link : https://school.programmers.co.kr/learn/courses/30/lessons/68935

const ternaryToDecimal = n => {
  console.log(n.toString().split('').reverse());
};

const solution = n =>
  n
    .toString(3)
    .split('')
    .map((v, i) => +v * 3 ** i)
    .reduce((dec, v) => dec + v);

const n = 45;
console.log(ternaryToDecimal(n));
console.log(solution(n));
