// link : https://leetcode.com/problems/find-all-anagrams-in-a-string/

const findAnagrams = (s, p) => {
  /**
   * 문자열을 순회하며 Map 객체 생성 => 각 문자의 등장 횟수 체크
   * 첫 p의 길이만큼 substring을 먼저 체크한 뒤 sliding window로 한 칸씩 밀어가며 체크
   */

  const targetLen = p.length;
  const chrCnt = [...p].reduce((acc, key) => {
    if (acc.has(key)) acc.set(key, acc.get(key) + 1);
    else acc.set(key, 1);
    return acc;
  }, new Map());

  const checkAnagram = chrCnt => {
    for (const val of chrCnt.values()) {
      if (val !== 0) return false;
    }
    return true;
  };

  const anagramIndexs = [];
  [...s].forEach((c, i, arr) => {
    if (i >= targetLen) chrCnt.set(arr[i - targetLen], chrCnt.get(arr[i - targetLen]) + 1);
    chrCnt.set(c, chrCnt.has(c) ? chrCnt.get(c) - 1 : -1);
    if (checkAnagram(chrCnt)) anagramIndexs.push(i - targetLen + 1);
  });

  return anagramIndexs;
};

const s = 'cbaebabacd';
const p = 'abc';
console.log(findAnagrams(s, p));

// // first approach => Time Limit Exceeded!!!
// const findAnagrams = (s, p) => {
//   /**
//    * 1. 알파벳을 순회하며 새로운 문자열 생성
//    * 2. 각 순회마다 anagram인지 체크해 true면 index - length 정답에 추가
//    */
//   const targetLen = p.length;

//   const checkAnagram = (str, p) => [...str].sort().join('') === [...p].sort().join('');

//   let str = '';
//   const anagramIndex = [];
//   [...s].forEach((c, i) => {
//     if (str.length === targetLen) {
//       str = str.substring(1) + c;
//     } else {
//       str += c;
//     }
//     if (checkAnagram(str, p)) {
//       anagramIndex.push(i - targetLen + 1);
//     }
//   });

//   return anagramIndex;
// };
