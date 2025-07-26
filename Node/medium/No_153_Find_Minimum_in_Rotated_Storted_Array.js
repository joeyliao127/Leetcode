/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        return nums[0] < nums[1] ? nums[0] : nums[1];
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // 最右邊比中間還小，代表最小值一定在右半邊（包含 mid + 1）
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            // 否則最小值在左半邊（包含 mid）
            right = mid;
        }
    }

    return nums[left];
};

console.log(findMin([2, 1, 3]));
console.log(findMin([1, 2, 3]));
findMin([3, 4, 5, 1, 2]);
findMin([4, 5, 6, 7, 0, 1, 2]);
findMin([11, 12, 15, 17]);
