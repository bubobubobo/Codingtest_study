// 수의 나열이 문자열 형태로 주어질 때, 연속되는 수의 그룹의 합이 가장 큰 경우를 구하고자 한다.

const solution = numStr => {
  let maxSum = -Infinity;
  let tmpSum = 0;
  [...numStr].forEach((n, i) => {
    if (i === 0) tmpSum += +n;
    else if (Math.abs(+n - +numStr[i - 1]) <= 1) tmpSum += +numStr[i];
    else {
      maxSum = maxSum < tmpSum ? tmpSum : maxSum;
      tmpSum = +n;
    }
  });
  return maxSum < tmpSum ? tmpSum : maxSum;
};

const numStr = '1234328987880';
console.log(solution(numStr));
