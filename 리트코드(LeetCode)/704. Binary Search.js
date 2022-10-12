const search = (nums, target) => {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target));
