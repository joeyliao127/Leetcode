/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 解釋：Left儲存左邊的乘積，Right儲存右邊的乘積
 * 這樣代表自己的 index 都沒有被做到乘法
 *
 * N: 1, 2, 3, 4
 * L: 01, 01, 02, 06
 * R: 24, 12, 04, 01
 *
 */

var productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1);
  const left_products = new Array(nums.length);
  const right_products = new Array(nums.length);
  left_products[0] = 1;
  right_products[nums.length - 1] = 1;
  let left_counter = 1;
  let right_counter = 1;
  let pointer = 1;

  while (pointer < nums.length) {
    left_counter *= nums[pointer - 1];
    left_products[pointer] = left_counter;
    right_counter *= nums[nums.length - 1 - pointer + 1];
    right_products[nums.length - pointer - 1] = right_counter;
    pointer += 1;
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left_products[i] * right_products[i];
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
