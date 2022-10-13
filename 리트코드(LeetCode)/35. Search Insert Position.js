// https://leetcode.com/problems/search-insert-position/

const searchInsert = (nums, target) => {
  let [left, right, mid, res] = [0, nums.length, 0, 0];
  nums[nums.length] = Infinity;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      res = mid;
      right = mid - 1;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return res;
};

const nums = [1, 3, 5, 6];
const target = 7;
console.log(searchInsert(nums, target));
