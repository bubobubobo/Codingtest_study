// wrong answer => because of error from large number computation
// const multiply = (num1, num2) => '' + eval(num1 * num2);

const multiply = (num1, num2) => {
  const addStrNums = (num1, num2) => {
    let res = '';
    const [short, long] =
      num1.length < num2.length
        ? [num1.padStart(num2.length, '0'), num2]
        : [num2.padStart(num1.length, '0'), num1];
    let round = 0;
    for (let i = long.length - 1; i >= 0; i--) {
      const tmpAdd = round + +long[i] + +short[i];
      round = tmpAdd >= 10 ? Math.floor(tmpAdd / 10) : 0;
      res = (tmpAdd % 10) + res;
    }
    return (round !== 0 ? round : '') + res;
  };

  const multiplyStrNumToSingleDigit = (num1, d, level) => {
    let res = '';
    let round = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
      const tmpMul = round + +num1[i] * +d;
      round = tmpMul >= 10 ? Math.floor(tmpMul / 10) : 0;
      res = (tmpMul % 10) + res;
    }
    res = (round !== 0 ? round : '') + res + ''.padEnd(level, '0');

    const nonZeroChr = res.match(/[1-9]/);
    if (nonZeroChr === null) return '0';
    return res.substring(nonZeroChr.index);
  };

  let res = '0';
  let level = 0;
  const [short, long] = num1.length < num2.length ? [num1, num2] : [num2, num1];
  for (let i = short.length - 1; i >= 0; i--) {
    res = addStrNums(res, multiplyStrNumToSingleDigit(long, short[i], level));
    level += 1;
  }
  return res;
};

const num1 = '123456789';
const num2 = '987654321';
// const num1 = '9';
// const num2 = '9';
console.log(multiply(num1, num2));
