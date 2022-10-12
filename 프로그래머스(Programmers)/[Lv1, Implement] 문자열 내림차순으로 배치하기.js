const solution = s =>
  s
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');

const s = 'Zbcdefg';
console.log(solution(s));
