const solution = str => {
  const numStrMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const numStrs = Object.keys(numStrMap);

  let strToNumList = '';
  let tmp = '';
  [...str].forEach(chr => {
    if (chr.match(/[0-9]/g)) strToNumList += chr;
    else {
      tmp += chr;
      if (numStrs.includes(tmp)) {
        strToNumList += numStrMap[tmp];
        tmp = '';
      }
    }
  });
  return +strToNumList;
};

const str = 'six6seventhree';
console.log(solution(str));
