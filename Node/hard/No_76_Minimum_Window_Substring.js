/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    // 建立目標字符的頻次map
    let targetMap = {};
    for (let char of t) {
        targetMap[char] = (targetMap[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let windowMap = {};
    let validCount = 0; // 當前視窗中符合條件的字符種類數量
    let requiredCount = Object.keys(targetMap).length; // 需要的字符種類數量

    // 記錄最小視窗
    let minLen = Infinity;
    let minStart = 0;

    while (right < s.length) {
        // 擴展視窗：加入右邊界字符
        let rightChar = s[right];
        windowMap[rightChar] = (windowMap[rightChar] || 0) + 1;

        // 如果當前字符在目標中，且頻次匹配，增加validCount
        if (targetMap[rightChar] && windowMap[rightChar] === targetMap[rightChar]) {
            validCount++;
        }

        // 嘗試收縮視窗：當所有字符都滿足條件時
        while (validCount === requiredCount) {
            // 更新最小視窗
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            // 移動左邊界
            let leftChar = s[left];
            windowMap[leftChar]--;

            // 如果移除的字符影響了條件，減少validCount
            if (targetMap[leftChar] && windowMap[leftChar] < targetMap[leftChar]) {
                validCount--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};

// 測試用例
const test_case = [
    { s: "ADOBECODEBANC", t: "ABC", ans: "BANC" },
    { s: "abc", t: "bc", ans: "bc" },
    { s: "bba", t: "ab", ans: "ba" },
    { s: "A", t: "B", ans: "" },
    { s: "ab", t: "a", ans: "a" },
    { s: "ab", t: "b", ans: "b" },
    { s: "a", t: "a", ans: "a" },
    { s: "ADOBECODEBANC", t: "AABC", ans: "ADOBECODEBA" }, // 額外測試重複字符
];

console.log("=== LeetCode 76 測試結果 ===");
for (let [index, test] of test_case.entries()) {
    console.log(`---- case${index + 1} ----`);
    const output = minWindow(test.s, test.t);
    console.log(`input: s="${test.s}", t="${test.t}"`);
    console.log(`output: "${output}"`);
    console.log(`expected: "${test.ans}"`);
    if (output === test.ans) {
        console.log("通過✅");
    } else {
        console.log("未通過❌");
    }
}
