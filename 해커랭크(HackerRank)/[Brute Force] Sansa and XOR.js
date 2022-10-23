function sansaXor(arr) {
  // Write your code here
  if (arr.length % 2 === 0) return 0;

  const oddPosNumbers = arr.filter((_, i) => i % 2 === 0);
  return oddPosNumbers.reduce((acc, cur) => acc ^ cur, 0);
}

const arr = [3, 4, 5];
console.log(sansaXor(arr));
