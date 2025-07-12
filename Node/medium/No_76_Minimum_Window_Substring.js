/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    if (t.length === 1) {
        if (s.includes(t)) return t;
    }

    let left = 0;
    let right = 0;
    let temp = [];
    let ans = "";
    let map = {};
    let counter = 0;

    for (const char of t) {
        if (!Object.hasOwn(map, char)) {
            map[char] = 0;
        }
        map[char] += 1;
        counter += 1;
    }

    let second_map = structuredClone(map);

    // 只移動 right，找到最長的 window
    while (Object.keys(map).length !== 0 && right < s.length) {
        temp.push(s[right]);
        if (!Object.hasOwn(map, s[right])) {
            right += 1;
            continue;
        }

        if (map[s[right]]) {
            map[s[right]] -= 1;
        }

        if (map[s[right]] === 0) {
            delete map[s[right]];
        }

        right += 1;
    }
    if (Object.keys(map).length) {
        return "";
    } else {
        ans = s.substring(left, right);
    }

    // 移動 left 和 right，開始伸縮 window
    let stack = [];
    while (right < s.length) {
        if (stack.length === 0) {
            while (stack.length === 0 && left < right) {
                left += 1;
                if (Object.hasOwn(second_map, s[left])) {
                    stack.push(s[left]);
                }
            }
            if (left >= right) {
                break;
            }
        }

        right += 1;
        if (right === s.length) {
            if (right - left < ans.length) {
                ans = s.substring(left, right);
                stack.pop();
            }
            continue;
        }

        if (s[right] === stack[0]) {
            stack.pop();
            if (right - left < ans.length) {
                ans = s.substring(left, right);
            }
        }
    }

    // 清除 left 不在t裡面的字元
    for (let i = 0; i < ans.length; i++) {
        if (Object.hasOwn(second_map, ans[i])) {
            return ans.substring(i);
        }
    }
};

const test_case = [
    { s: "ADOBECODEBANC", t: "ABC", ans: "BANC" },
    { s: "abc", t: "bc", ans: "bc" },
    { s: "bba", t: "ab", ans: "ba" },
    { s: "A", t: "B", ans: "" },
    { s: "ab", t: "a", ans: "a" },
    { s: "ab", t: "b", ans: "b" },
    { s: "a", t: "a", ans: "a" },
];

for (let [index, test] of test_case.entries()) {
    console.log(`---- case${index + 1} ----`);
    const output = minWindow(test.s, test.t);
    console.log(`output: ${output}`);
    console.log(`ans: ${test.ans}`);
    if (output === test.ans) console.log("通過✅");
    else console.log("未通過❌");
}
