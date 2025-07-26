/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // 左半邊有序
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // 右半邊有序
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

const cases = [
    {
        nums: [3, 1],
        target: 1,
        ans: 1,
    },

    {
        nums: [4, 5, 6, 7, 0, 1, 2],
        target: 0,
        ans: 4,
    },
    {
        nums: [4, 5, 6, 7, 0, 1, 2],
        target: 3,
        ans: -1,
    },
    {
        nums: [1],
        target: 0,
        ans: -1,
    },
];

for (const test_case of cases) {
    console.log(`nums: ${test_case.nums}, target: ${test_case.target}`);
    const output = search(test_case.nums, test_case.target);
    console.log(`ans: ${test_case.ans}, output: ${output}`);
    console.log(`result: ${test_case.ans === output}`);
    console.log("--------------");
}
