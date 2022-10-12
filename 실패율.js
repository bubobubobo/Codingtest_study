const solution = (N, stages) => {
  // 1. stage 1 ~ 5까지 실패율 계산
  const failure = Array.from(new Array(N), (_, i) => [i + 1, 0, stages.length]);

  stages
    .sort((a, b) => a - b)
    .forEach(stage => {
      if (stage > N) return;
      failure[stage - 1][1] += 1;
    });

  let acc = 0;
  failure.forEach(fail => {
    fail[2] -= acc;
    acc += fail[1];
  });

  const failureRate = failure.map(fail => [fail[0], fail[1] / fail[2]]);

  // 2. 실패율을 기준으로 내림차순 정렬
  return failureRate.sort((a, b) => b[1] - a[1]).map(failRate => failRate[0]);
};

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
