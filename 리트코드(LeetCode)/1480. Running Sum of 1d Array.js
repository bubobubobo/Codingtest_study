const runningSum = nums => {
  const rSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    rSum.push(nums[i] + rSum[i - 1]);
  }
  return rSum;
};

const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
