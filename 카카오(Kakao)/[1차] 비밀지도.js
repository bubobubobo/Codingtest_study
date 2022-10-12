const solution = (n, arr1, arr2) =>
  arr1.map((p, i) => {
    const str1 = p.toString(2).padStart(n, 0);
    const str2 = arr2[i].toString(2).padStart(n, 0);
    return str1
      .split('')
      .map((chr, idx) => (+chr || +str2[idx] ? '#' : ' '))
      .join('');
  });

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
console.log(solution(n, arr1, arr2));
