// function solution(name) {
//   const chrCount = [];
//   for (const chr of name) {
//     chrCount.push(countSettingCharacter(chr));
//   }
//   const totalLen = chrCount.length;

//   const res = 0;
//   // 왼쪽과 오른쪽에서 A가 아닌 index를 시작점으로 찾음
//   let left = 0;
//   let right = chrCount.length - 1;
//   while (right > 0) {
//     if (chrCount[right] !== 0) break;
//     else right--;
//   }
//   while (left < right) {
//     if (chrCount[left] !== 0) break;
//     else left++;
//   }

//   // 총 4가지의 경우의 수
//   // 1. 시작점에서부터 오른쪽으로 쭉 읽는 경우
//   // 2. 오른쪽으로 가다가 뒤로 가는 경우
//   // 3. 뒤로 시작해서 쭉 읽는 경우
//   // 4. 뒤로 가다가 다시 오른쪽으로 가는 경우
//   // 전수조사 전략 : 1, 3은 미리 계산
//   // 2, 4는 0이 아닌 모든 index에 대해 계산
//   const firstCase = right + chrCount.reduce((a, b) => a + b);
//   const thirdCase = chrCount.length - left + chrCount.reduce((a, b) => a + b);
//   let secondCase = Infinity;
//   let fourthCase = Infinity;

//   const midPos = Math.floor(chrCount.length / 2);
//   const beforeMid = [];
//   const afterMid = [];
//   for (const idx in chrCount) {
//     if (idx < midPos && chrCount[idx]) beforeMid.push(parseInt(idx));
//     if (idx >= midPos && chrCount[idx]) afterMid.push(parseInt(idx));
//   }

//   beforeMid.forEach(idx => {
//     let nextNonZeroIdx = idx + 1;
//     while (chrCount[nextNonZeroIdx] === 0 && nextNonZeroIdx < chrCount.length) {
//       nextNonZeroIdx++;
//     }
//     const tmp = 2 * idx + (chrCount.length - nextNonZeroIdx);
//     secondCase = secondCase > tmp ? tmp : secondCase;
//   });
//   secondCase += chrCount.reduce((a, b) => a + b);

//   afterMid.forEach(idx => {
//     let nextNonZeroIdx = idx - 1;
//     while (chrCount[nextNonZeroIdx] === 0 && nextNonZeroIdx > 0) {
//       nextNonZeroIdx--;
//     }
//     const tmp = 2 * (chrCount.length - idx) + nextNonZeroIdx;
//     fourthCase = fourthCase > tmp ? tmp : fourthCase;
//   });
//   fourthCase += chrCount.reduce((a, b) => a + b);

//   return Math.min(firstCase, secondCase, thirdCase, fourthCase);
// }

// // 알파벳 최소 이동 횟수 계산
// function countSettingCharacter(chr) {
//   const [AVal, ZVal] = ['A'.codePointAt(), 'Z'.codePointAt()];
//   const curVal = chr.codePointAt();
//   return Math.min(curVal - AVal, ZVal - curVal + 1);
// }

// const name = 'BABABA';
// console.log(solution(name));
