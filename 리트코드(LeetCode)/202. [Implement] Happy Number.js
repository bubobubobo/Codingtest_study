const isHappy = n => {
  const stack = [];
  let cur = n;
  while (!stack.includes(cur)) {
    stack.push(cur);
    let tmp = 0;
    while (cur > 0) {
      tmp += (cur % 10) ** 2;
      cur = Math.floor(cur / 10);
    }
    if (tmp === 1) return true;
    cur = tmp;
  }
  return false;
};

const n = 2;
console.log(isHappy(n));
