const isSubsequence = (s, t) => {
  let [left, right] = [0, 0];
  for (right; right < t.length; right++) {
    if (left === s.length) return true;
    if (s[left] === t[right]) left += 1;
  }

  return left === s.length;
};

const s = 'aaaaa';
const t = 'bbaaaa';
console.log(isSubsequence(s, t));
