/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let left = 0;
    let right = 1;
    let ans = 0;
    let set = new Set([s[left]]);

    while (right < s.length) {
        if (set.has(s[right])) {
            const len = right - left;
            ans = len < ans ? ans : len;

            let offset = 1;
            for (let i = 0; i <= right - left; i++) {
                if (s[left + i] === s[right]) {
                    offset += i;
                    break;
                } else {
                    set.delete(s[left + i]);
                }
            }

            left += offset;
        } else {
            set.add(s[right]);
        }

        right += 1;
    }

    const len = right - left;
    return (ans = len < ans ? ans : len);
};
