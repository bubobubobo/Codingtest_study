function solution(heights) {
  let answer = 0;
  for (let i = 0; i < heights.length; i++) {
    const max = -1;
    for (let j = 0; j < heights.length; j++) {
      if (heights[i] <= heights[j]) {
        // if (i > j) {

        //   console.log(heights[i]);
        //   console.log(heights[j]);
        //   console.log(1);
        //   console.log(1);
        // }

        if (i > j && heights.slice(j + 1, i).findIndex(num => num >= heights[j]) === -1)
          answer += 1;

        if (i < j && heights.slice(i + 1, j).findIndex(num => num >= heights[j]) === -1)
          answer += 1;
      }
    }
  }

  return answer;
}

const heights = [3, 5, 4, 2, 4, 4, 6, 8];
console.log(solution(heights)); // 18
