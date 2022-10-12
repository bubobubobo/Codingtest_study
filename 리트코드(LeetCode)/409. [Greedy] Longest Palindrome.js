// link : https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = s => {
  // 최대 중복수가 홀수인 것은 최댓값만 그대로 선택 & 나머지는 해당 값보다 작은 최대 짝수
  // 나머지는 최대 중복 짝수를 선택해 더함
  const letterMap = {};
  [...s].forEach(chr => {
    if (letterMap[chr] !== undefined) letterMap[chr] += 1;
    else letterMap[chr] = 1;
  });

  const entries = Object.entries(letterMap);

  let odds = 0;
  let evens = 0;
  entries.forEach(([_, count]) => {
    // count is even
    if (count % 2 === 0) {
      evens += count;
    }
    // count is odd
    else if (!odds) odds += count;
    else odds += count - 1;
  });

  return odds + evens;
};

const s = 'ababababa';
console.log(longestPalindrome(s));
