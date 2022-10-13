// const solution = (n, info) => {
//   let maxDiff = -Infinity;
//   let answer = [-1];

//   const ryan = new Array(11).fill(0);

//   const isBetter = ryan => {
//     for (let i = 10; i >= 0; i--) {
//       if (ryan[i] > answer[i]) return true;
//       if (ryan[i] < answer[i]) return false;
//     }
//   };

//   const calcScore = (ryan, apeach) => {
//     let ryanScore = 0;
//     let apeachScore = 0;

//     ryan.forEach((n, i) => {
//       if (n > apeach[i]) ryanScore += 10 - i;
//       else if (apeach[i] > 0) apeachScore += 10 - i;
//     });

//     const diff = ryanScore - apeachScore;
//     if (diff > 0 && diff >= maxDiff) {
//       if (diff === maxDiff && !isBetter(ryan)) return;

//       maxDiff = diff;
//       answer = ryan;
//     }
//   };

//   const solve = (idx, arrows, ryan, apeach) => {
//     if (idx === 11 || arrows === 0) {
//       ryan[10] += arrows;
//       calcScore(ryan, apeach);
//       ryan[10] -= arrows;
//       return;
//     }

//     // 얻기로 결정한 경우
//     if (apeach[idx] < arrows) {
//       ryan[idx] += apeach[idx] + 1;
//       // console.log(ryan);
//       solve(idx + 1, arrows - apeach[idx] - 1, ryan, apeach);
//       ryan[idx] -= apeach[idx] + 1;
//     }

//     // 얻지 않기로 결정한 경우
//     solve(idx + 1, arrows, ryan, apeach);
//   };

//   solve(0, n, ryan, info);

//   return answer;
// };

// const solution = (n, info) => {
//   let result = Array.from({ length: 11 }, () => 0);
//   let max = 0;

//   const shot = (peachScore, ryanScore, count, idx, scoreBoard) => {
//     if (n < count) return;

//     if (idx > 10) {
//       const scoreDiff = ryanScore - peachScore;

//       if (max < scoreDiff) {
//         scoreBoard[10] = n - count;
//         max = scoreDiff;
//         result = scoreBoard;
//       }
//     }

//     if (n > count) {
//       const candidate = [...scoreBoard];
//       candidate[10 - idx] = info[10 - idx] + 1;
//       shot(peachScore, ryanScore + idx, count + info[10 - idx] + 1, idx + 1, candidate);
//     }

//     if (info[10 - idx] > 0) {
//       shot(peachScore + idx, ryanScore, count, idx + 1, scoreBoard);
//     } else {
//       shot(peachScore, ryanScore, count, idx + 1, scoreBoard);
//     }
//   };

//   shot(0, 0, 0, 0, result);

//   if (max <= 0) return [-1];
//   return result;
// };

const solution = (n, info) => {
  let maxDiff = -Infinity;
  let result = [-1];

  const isBetter = ryan => {
    for (let i = 10; i >= 0; i--) {
      if (ryan[i] > result[i]) return true;
      if (ryan[i] < result[i]) return false;
    }
  };

  const calcScore = (ryan, apeach) => {
    let ryanScore = 0;
    let apeachScore = 0;

    ryan.forEach((arrow, i) => {
      if (arrow > apeach[i]) ryanScore += 10 - i;
      else if (apeach[i] > 0) apeachScore += 10 - i;
    });

    const diff = ryanScore - apeachScore;

    if (diff >= maxDiff && diff > 0) {
      if (diff === maxDiff && !isBetter(ryan)) return;

      maxDiff = diff;
      result = ryan;
    }
  };

  const shot = (idx, arrows, ryan, apeach) => {
    if (idx === 11 || arrows === 0) {
      ryan[10] += arrows;
      calcScore(ryan, apeach);
      ryan[10] -= arrows;
    }

    if (apeach[idx] + 1 < arrows) {
      ryan[idx] += apeach[idx] + 1;
      shot(idx + 1, arrows - apeach[idx] - 1, ryan, apeach);
      ryan[idx] -= apeach[idx] + 1;
    }

    shot(idx + 1, arrows, ryan, apeach);
  };

  const ryan = Array.from({ length: 11 }, () => 0);
  shot(0, n, ryan, info);
};

const n = 5;
const info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
console.log(solution(n, info));
