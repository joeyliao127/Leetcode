/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0;
    let maxCount = 0;
    const count = {};

    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;

        maxCount = Math.max(maxCount, count[char]);

        while (right - left + 1 - maxCount > k) {
            count[s[left]] -= 1;
            left += 1;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log(characterReplacement("ABBB", 2));
console.log(characterReplacement("ABCDE", 1));
console.log(characterReplacement("AAAB", 0));
