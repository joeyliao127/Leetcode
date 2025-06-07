/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = prices[0];
    let right = 0;
    let ans = 0;

    for (let i = 1; i < prices.length; i++) {
        right = prices[i];

        if (right > left) {
            let temp = right - left;
            ans = ans > temp ? ans : temp;
        } else {
            left = right;
        }
    }
    return ans;
};
