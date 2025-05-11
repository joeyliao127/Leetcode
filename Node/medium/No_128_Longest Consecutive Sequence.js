/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const set = new Set(nums);

  let min = nums[0];
  let ans = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      ans = Math.max(ans, currentStreak);
    }
  }

  return ans;
};

console.log(longestConsecutive([1, 0, 1, 2]));
