// link : https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/

const longestPalindrome = words => {
  /**
   * 1. 동일한 알파벳으로 구성된 단어 X 2
   * 2. pair 개수 X 4
   * 단, 중복되는 것에 대해서 서로 다르게 처리
   */

  const pals = [];
  const nonPals = [];
  [...words].forEach(word => {
    if (word[0] === word[1]) pals.push(word);
    else nonPals.push(word);
  });

  // 1. counting available palindromes
  const palsMap = new Map();
  for (let i = 0; i < pals.length; i++) {
    if (palsMap.has(pals[i])) palsMap.set(pals[i], palsMap.get(pals[i]) + 1);
    else palsMap.set(pals[i], 1);
  }
  // sort by counts
  let sortedPals = [...palsMap].sort((a, b) => b[1] - a[1]);
  // 중앙에 오는 palindrome을 초기값으로 설정
  let palindromes;
  if (sortedPals.length === 0) palindromes = 0;
  else if (sortedPals.length === 1) palindromes = sortedPals[0][1];
  else if (sortedPals[0][1] % 2 === 0) {
    sortedPals = [sortedPals[sortedPals.length - 1], ...sortedPals.slice(0, sortedPals.length - 1)];
    palindromes = sortedPals[0][1];
  } else palindromes = sortedPals[0][1];

  // 나머지 palindrome들 중 palindrome에 사용 가능한 개수(짝수) 추가
  for (let i = 1; i < sortedPals.length; i++) {
    if (sortedPals[i][1] > 1)
      palindromes += sortedPals[i][1] % 2 ? sortedPals[i][1] - 1 : sortedPals[i][1];
  }

  // 2. counting pairs
  const isChecked = new Array(nonPals.length).fill(false);
  let pairs = 0;
  for (let i = 0; i < nonPals.length - 1; i++) {
    // 아직 체크되지 않은 단어에 대해서
    if (!isChecked[i]) {
      for (let j = i + 1; j < nonPals.length; j++) {
        // 체크되지 않고 뒤집혀진 단어라면
        if (!isChecked[j] && nonPals[i][0] === nonPals[j][1] && nonPals[i][1] === nonPals[j][0]) {
          pairs += 1;
          isChecked[j] = true;
          break;
        }
      }
    }
  }

  return palindromes * 2 + pairs * 4;
};

const words = ['cc', 'll', 'xx'];
console.log(longestPalindrome(words));
