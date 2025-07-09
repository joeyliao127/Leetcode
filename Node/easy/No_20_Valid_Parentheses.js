/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let mapping = {
        "{": "}",
        "(": ")",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        if (Object.hasOwn(s[i])) {
            stack.push(s[i]);
            continue;
        }

        if (mapping[stack[stack.length - 1]] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? true : false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
