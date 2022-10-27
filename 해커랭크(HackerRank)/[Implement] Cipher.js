// link : https://www.hackerrank.com/challenges/cipher/problem

function cipher(k, s) {
  // Write your code here
  const getSingleSolution = (arr, res) => arr.reduce((acc, cur) => acc ^ cur, 0) ^ res;

  let originalMsg = '';
  let restXOR = 0; // 변수를 제외한 나머지 계산값
  for (let i = 0; i < s.length - k + 1; i++) {
    originalMsg += restXOR ^ +s[i];

    // update restXOR
    if (i < k - 1) {
      i;
      restXOR ^= +originalMsg[originalMsg.length - 1];
    } else {
      originalMsg;
      console.log(originalMsg[i - k + 1]);
      restXOR = +originalMsg[i - k + 1] ^ restXOR ^ +originalMsg[originalMsg.length - 1];
    }
    restXOR;
  }
  originalMsg;
}

const k = 4;
const s = '1110100110';
console.log(cipher(k, s));
