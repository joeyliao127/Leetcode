/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height.length === 2) return height[0] < height[1] ? height[0] : height[1];

  let ans = 0;
  let l = 0;
  let r = height.length - 1;

  while (l !== r) {
    let index = 0;
    if (height[l] < height[r]) index = l;
    else index = r;

    let temp_max = height[index] * (r - l);
    if (temp_max > ans) ans = temp_max;
    if (height[l] < height[r]) l += 1;
    else r -= 1;
  }

  return ans;
};
