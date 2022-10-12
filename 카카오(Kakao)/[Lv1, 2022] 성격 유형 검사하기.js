const TOTAL_GROUP = 4;
const SELECTOR_LENGTH = 7;

const types = [
  { type: 'R', group: 1, score: 0 },
  { type: 'T', group: 1, score: 0 },
  { type: 'C', group: 2, score: 0 },
  { type: 'F', group: 2, score: 0 },
  { type: 'J', group: 3, score: 0 },
  { type: 'M', group: 3, score: 0 },
  { type: 'A', group: 4, score: 0 },
  { type: 'N', group: 4, score: 0 },
];

const getGroupedType = types => {
  const groupedType = [];
  for (let i = 1; i <= TOTAL_GROUP; i++) {
    groupedType.push(types.filter(t => t.group === i).map(t => t.type));
  }
  return groupedType;
};

const getTypeScore = types => types.reduce((typeScore, { type, score }) => ({ typeScore, type }));

console.log(getGroupedType(types));

// const types = {
//   R: [1, 0],
//   T: [1, 0],
//   C: [2, 0],
//   F: [2, 0],
//   J: [3, 0],
//   M: [3, 0],
//   A: [4, 0],
//   N: [4, 0],
// };
// const typeGroup = [
//   ['R', 'T'],
//   ['C', 'F'],
//   ['J', 'M'],
//   ['A', 'N'],
// ];

// const getScore = (type, choice) => {
//   const middle = Math.ceil(SELECTOR_LENGTH / 2);

//   if (choice > middle) return [type[1], choice - middle];
//   if (choice < middle) return [type[0], middle - choice];
//   return [type[0], 0];
// };

// const solution = (survey, choices) => {
//   survey.forEach((test, idx) => {
//     const [type, score] = getScore(test, choices[idx]);
//     types[type][1] += score;
//   });

//   return typeGroup
//     .map(group => {
//       const [left, right] = [types[group[0]][1], types[group[1]][1]];
//       return left < right ? group[1] : group[0];
//     })
//     .join('');
// };

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];
// console.log(solution(survey, choices));
