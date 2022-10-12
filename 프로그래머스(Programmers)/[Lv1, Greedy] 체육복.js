// const solution = (n, lost, reserve) => {
//   // 1. 초기 체육복 상태 배열로 저장
//   const initialState = new Array(n).fill(0);
//   const reserveState = initialState.map((_, idx) => {
//     let clothes = 0;
//     if (!lost.includes(idx + 1)) clothes += 1;
//     if (reserve.includes(idx + 1)) clothes += 1;
//     return clothes;
//   });

//   // 2. 없는 학생들에 대해 왼쪽 학생이 2개 있으면 빌리고,
//   // 없으면 오른쪽 학생 체크
//   for (let i = 0; i < n; i++) {
//     // 체육복이 없으면
//     if (!reserveState[i]) {
//       // 왼쪽 체크
//       if (i !== 0 && reserveState[i - 1] === 2) {
//         reserveState[i - 1] -= 1;
//         reserveState[i] += 1;
//       }
//       // 오른쪽 체크
//       else if (i !== n - 1 && reserveState[i + 1] === 2) {
//         reserveState[i + 1] -= 1;
//         reserveState[i] += 1;
//       }
//     }
//   }

//   // 3. 0이 아닌 학생들의 숫자 체크
//   return reserveState.filter(clothes => !!clothes).length;
// };

// function solution(n, lost, reserve) {
//   let answer = n - lost.length;

//   const rent = rentIdx => {
//     if (reserve.includes(rentIdx)) {
//       reserve.splice(reserve.indexOf(rentIdx), 1);
//       answer += 1;
//     }
//   };

//   lost
//     .sort((a, b) => a - b)
//     .forEach(studentIdx => {
//       const curStudents = answer;

//       rent(studentIdx);
//       if (answer - 1 !== curStudents) rent(studentIdx - 1);
//       if (answer - 1 !== curStudents) rent(studentIdx + 1);
//     });

//   return answer;
// }

function solution(n, lost, reserve) {
  let answer = n - lost.length;

  // 자기자신인아이는 무조건 자기것 만씀

  lost.forEach(student => {
    student;
    if (reserve.includes(student)) {
      reserve.splice(reserve.indexOf(student), 1);
      lost.splice(lost.indexOf(student), 1);
      console.log(reserve);
      console.log(lost);
      answer += 1;
    }
  });

  const rent = rentIdx => {
    if (reserve.includes(rentIdx)) {
      reserve.splice(reserve.indexOf(rentIdx), 1);
      answer += 1;
    }
  };

  lost
    .sort((a, b) => a - b)
    .forEach(studentIdx => {
      const curStudents = answer;

      rent(studentIdx - 1);

      if (answer - 1 !== curStudents) rent(studentIdx + 1);
    });
  return answer;
}

const n = 6;
const lost = [1, 2, 5, 6];
const reserve = [2, 3, 4, 5];
console.log(solution(n, lost, reserve)); // 3
