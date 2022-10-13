// link : https://school.programmers.co.kr/learn/courses/30/lessons/12923

const solution = (begin, end) => {
  const road = [0, 0];
  const blocks = new Array(end + 1).fill(false);
  // 순회하면서 현제 value에 대해 blocks에 배수들이 있으면 road[blocks] = blocks / value
  // 없으면 소수란 뜻이므로 1
  for (let i = 2; i <= end; i++) {
    if (!blocks[i]) {
      road[i] = 1;
      for (let j = 2; i * j <= end; j += 1) {
        road[i * j] = j;
        blocks[i * j] = true;
        j;
      }
    }
  }
  console.log(blocks);
  console.log(road);
};

const begin = 1;
const end = 10;
console.log(solution(begin, end));
