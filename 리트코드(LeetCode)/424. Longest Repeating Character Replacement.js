// link : https://leetcode.com/problems/longest-repeating-character-replacement/

const characterReplacement = (s, k) => {
  /**
   * ref : https://www.youtube.com/watch?v=gqXU1UyA8pk
   * validity check
   *  => if valid : move right
   *  => if not valid : move left until valid
   * return the longest valid substring
   */
  // base case
  if (s.length === 1) return 1;

  // initialize character count map
  const chrMap = new Map();
  chrMap.set(s[0], 1);
  chrMap.set(s[1], s[1] === s[0] ? 2 : 1);

  const checkValid = str => {
    const maxVal = Math.max(...chrMap.values());
    return str.length - maxVal <= k;
  };

  let str = s.substring(0, 2);
  let maxLen = 2 - k;
  let [left, right] = [0, 2];
  while (right <= s.length) {
    if (checkValid(str)) {
      str += s[right];
      chrMap.set(s[right], chrMap.has(s[right]) ? chrMap.get(s[right]) + 1 : 1);
      maxLen = maxLen < right - left ? right - left : maxLen;
      right += 1;
    } else {
      while (!checkValid(str)) {
        str = str.substring(1);
        chrMap.set(s[left], chrMap.get(s[left]) - 1);
        left += 1;
      }
    }
  }

  return maxLen;
};

const s = 'AABABBA';
const k = 1;
console.log(characterReplacement(s, k));
