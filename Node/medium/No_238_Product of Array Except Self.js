/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;

      if (nums[j] === 0) {
        answer[i] = 0;
        break;
      } else {
        answer[i] *= nums[j];
      }
    }
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
