const longestCommonPrefix = strs => {
  // base case
  if (strs.length === 1) return strs[0];

  const isCommon = idx => {
    if (strs[0][idx] === undefined) return false;
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][idx] === undefined) return false;
      if (strs[i][idx] !== strs[i - 1][idx]) return false;
    }
    return true;
  };

  let commonPrefix = '';
  for (let idx = 0; ; idx++) {
    if (!isCommon(idx)) break;
    commonPrefix += strs[0][idx];
  }
  return commonPrefix;
};

// const strs = ['flower', 'flow', 'flight'];
const strs = ['', ''];
console.log(longestCommonPrefix(strs));
