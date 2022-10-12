const solution = s => {
  let [p, y] = [0, 0];
  for (const chr of s) {
    if (chr === 'Y' || chr === 'y') y += 1;
    if (chr === 'P' || chr === 'p') p += 1;
  }
  return p === y;
};

const s = 'pPoooyY';
console.log(solution(s));
