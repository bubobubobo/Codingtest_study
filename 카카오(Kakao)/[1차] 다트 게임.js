const TOTAL_GAMES = 3;

const getResultInfo = dartResult => {
  const tmp = [];
  dartResult.replace(/[0-9]/g, match => {
    tmp.push([+match, dartResult.split('').indexOf(match)]);
  });
  let scores = [];
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i][0] === 0) scores = [...scores.slice(0, i - 1), [10, tmp[i][1]]];
    else scores.push(tmp[i]);
  }
  return scores.map(([v, vIdx], idx) => [
    v,
    idx === TOTAL_GAMES - 1
      ? dartResult.substring(vIdx + 1)
      : dartResult.substring(vIdx + 1, scores[idx + 1][1]),
  ]);
};

const getScore = info => {
  const scores = info.map(i => i[0]);
  info.forEach(([_, m], i) => {
    // S, D, T에 대한 처리
    switch (m[0]) {
      case 'S':
        break;
      case 'D':
        scores[i] **= 2;
        break;
      case 'T':
        scores[i] **= 3;
        break;
      default:
        break;
    }
    // *, #에 대한 처리
    if (m[1]) {
      switch (m[1]) {
        case '*':
          if (i !== 0) scores[i - 1] *= 2;
          scores[i] *= 2;
          break;
        case '#':
          scores[i] *= -1;
          break;
        default:
          break;
      }
    }
  });
  return scores.reduce((sum, cur) => sum + cur, 0);
};

const solution = dartResult => {
  // parse => compute score
  const info = getResultInfo(dartResult);
  return getScore(info);
};

// const dartResult = '1S2D*3T';
// const dartResult = '1D2S#10S';
const dartResult = '1D2S0T';
console.log(solution(dartResult));
