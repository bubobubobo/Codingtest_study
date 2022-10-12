const solution = s => {
  const numbers = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  let word = '';
  let originalNumber = '';
  const numStrs = Object.keys(numbers);
  for (let i = 0; i < s.length; i++) {
    // 문자이면
    if (s[i].match(/[0-9]/) === null) {
      word += s[i];
      if (numStrs.includes(word)) {
        originalNumber += numbers[word];
        word = '';
      }
    }
    // 숫자이면
    else {
      originalNumber += s[i];
    }
  }
  return +originalNumber;
};

const s = 'one4seveneight';
console.log(solution(s));
