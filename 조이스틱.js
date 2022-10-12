// 위아래로 움직이는 최소 횟수
const countUpDown = function (chr) {
  return /[A-M]/.test(chr)
    ? chr.charCodeAt() - 'A'.charCodeAt()
    : 'Z'.charCodeAt() - chr.charCodeAt() + 1;
};

const getSeriesSteps = function (subString) {
  return [
    'A'.repeat(subString.length),
    subString
      .split('')
      .map((chr, idx, self) => {
        if (idx === self.length - 1) return countUpDown(chr);
        if (chr === 'A') return 1;
        return countUpDown(chr) + 1;
      })
      .reduce((acc, cur) => acc + cur, 0),
  ];
};

// dir === 1 : right, dir === 0 : left
const getSubstring = function (string, dir, start, end) {
  return dir
    ? string.substring(start, end)
    : string.substring(start, end).split('').reverse().join('');
};

const addSubstrings = function (...strArr) {
  return strArr.reduce((acc, cur) => acc + cur, '');
};

const solution = function (name) {
  const firstNonAIdx = name.search(/[^A]/);
  const secondNonAIdx = getSubstring(name, 1, firstNonAIdx + 1, name.length).search(/[^A]/);
  const lastNonAIdx = name.search(/.$|.A+$/);

  let cLNonAIdx = -1;
  let cRNonAIdx = -1;
  for (let i = 0; i < Math.floor(name.length / 2); i++) {
    if (name[i] !== 'A') cLNonAIdx = i;
    if (name[name.length - i - 1] !== 'A') cRNonAIdx = name.length - i - 1;
  }
  const nextCLNonAIdx =
    cLNonAIdx + getSubstring(name, 1, cLNonAIdx + 1, name.length).search(/[^A]/) + 1;
  const nextCRNonAIdx = getSubstring(name, 1, 0, cRNonAIdx).search(/.$|.A+$/);

  const res = [];
  // 1. 오른쪽으로 쭉 바꾸는 경우
  res.push(getSeriesSteps(getSubstring(name, 1, 0, lastNonAIdx + 1))[1]);

  // 2. 왼쪽으로 쭉 바꾸는 경우
  if (firstNonAIdx === 0)
    res.push(
      countUpDown(name[0]) + getSeriesSteps(getSubstring(name, 0, secondNonAIdx, name.length))[1]
    );
  res.push(getSeriesSteps(getSubstring(name, 0, firstNonAIdx, name.length))[1] + 1);

  // 3. 오른쪽으로 가다가 왼쪽으로 쭉 가는 경우
  if (cLNonAIdx !== -1 && cLNonAIdx !== lastNonAIdx) {
    const [newSub, tmpVal] = getSeriesSteps(getSubstring(name, 1, 0, cLNonAIdx + 1));
    res.push(
      tmpVal +
        getSeriesSteps(addSubstrings(newSub, getSubstring(name, 0, nextCLNonAIdx, name.length)))[1]
    );
  }

  // 4. 왼쪽으로 가다가 오른쪽으로 쭉 가는 경우
  if (cRNonAIdx !== -1 && cRNonAIdx !== firstNonAIdx) {
    const [newSub, tmpVal] = getSeriesSteps(getSubstring(name, 0, cRNonAIdx, name.length));
    res.push(
      tmpVal +
        1 +
        getSeriesSteps(addSubstrings(newSub, getSubstring(name, 1, 0, nextCRNonAIdx + 1)))[1]
    );
  }
  return Math.min(...res);
};

const name = 'BABABA';
console.log(solution(name));

// console.log(solution('BBBAAAB')); // #8
// console.log(solution('ABABAAAAABA')); // #10
// console.log(solution('CANAAAAANAN')); // #48
// console.log(solution('ABAAAAABAB')); // #8
// console.log(solution('ABABAAAAAB')); // #8
// console.log(solution('BABAAAAB')); // #7
// console.log(solution('AAA')); // #0
// console.log(solution('ABAAAAAAABA')); // #6
// console.log(solution('AAB')); // #2
// console.log(solution('AABAAAAAAABBB')); // #11
// console.log(solution('ZZZ')); // #5
// console.log(solution('BBBBAAAAAB')); // #10
// console.log(solution('BBBBAAAABA')); // #12

// // i 인덱스부터 A가 아닌 알파벳까지의 오른쪽(right)/왼쪽(left) 거리
// const countSteps = function (name, i, dir) {
//   name = name.join('');
//   return dir === 'right'
//     ? String(name.substring(i + 1) + name).search(/[^A]/) + 1
//     : name.length + i - String(name + name.substring(0, i)).search(/.$|.A+$/);
// };
