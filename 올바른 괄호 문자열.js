const isValid = s => {
  const pair = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const left = Object.keys(pair);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // 왼쪽이 들어온 경우
    if (left.includes(s[i])) {
      stack.push(s[i]);
      continue;
    }
    // 비어있는데 오른쪽이 들어온 경우
    if (!stack) return false;
    // 비어있지 않고 오른쪽이 들어왔는데 짝이 아닌 경우
    if (pair[stack[stack.length - 1]] !== s[i]) return false;
    stack.pop();
  }
  return !stack.length;
};

const solution = s => {
  let totalValidStr = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (isValid(s.substring(i) + s.substring(0, i))) totalValidStr += 1;
  }
  return totalValidStr;
};

const s = '[](){}';
console.log(solution(s));
