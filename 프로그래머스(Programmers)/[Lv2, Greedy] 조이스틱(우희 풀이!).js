function solution(name) {
  let answer = 0;
  let move = name.length - 1;
  let next = 0;
  for (let i = 0; i < name.length; i++) {
    answer += Math.min(name.charCodeAt(i) - 65, 90 - name.charCodeAt(i) + 1);
    next = i + 1;
    while (next < name.length && name[next] === 'A') {
      next++;
    }
    move = Math.min(move, i + name.length - next + Math.min(i, name.length - next));
  }
  return answer + move;
}

console.log(solution('hello!'));
