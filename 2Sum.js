// double loop method
let nums = [41, 8, 4, 5];

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    //41
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.log(twoSum(nums, 9));
