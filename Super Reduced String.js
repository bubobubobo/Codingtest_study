function superReducedString(s) {
  // Write your code here
  while (s.search(/([a-z])\1{1}/g) !== -1) {
    s = s.replace(/([a-z])\1{1}/g, '');
  }
  return s === '' ? 'Empty String' : s;
}

const s = 'bbaa';
console.log(superReducedString(s));
