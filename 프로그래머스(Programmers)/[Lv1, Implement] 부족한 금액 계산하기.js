// link : https://school.programmers.co.kr/learn/courses/30/lessons/82612

const solution = (price, money, count) => {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total += price * i;
  }
  return money < total ? total - money : 0;
};

const [price, money, count] = [3, 20, 4];
console.log(solution(price, money, count));
