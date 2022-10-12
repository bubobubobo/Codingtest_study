const solution = (n, words) => {
  let [turn, person] = [1, 1];
  for (turn; turn < words.length; turn++) {
    const prevWord = words[turn - 1];
    const currWord = words[turn];
    // 탈락 기준
    if (prevWord[prevWord.length - 1] !== currWord[0] || turn !== words.indexOf(currWord)) break;
    person = (person + 1) % n;
  }
  if (turn === words.length) return [0, 0];
  return [person + 1, Math.floor(turn / n) + 1];
};

const n = 2;
const words = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];
console.log(solution(n, words));
