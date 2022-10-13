const pivotIndex = nums => {
  let [lSum, rSum] = [0, nums.slice(1).reduce((s, c) => s + c, 0)];
  if (lSum === rSum) return 0;

  for (let i = 1; i < nums.length; i++) {
    lSum += nums[i - 1];
    rSum -= nums[i];
    if (lSum === rSum) return i;
  }
  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
