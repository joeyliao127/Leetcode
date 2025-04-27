class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encode_str = "";

    for (const str of strs) {
      encode_str += `|${str.length}|#${str}`;
    }
    return encode_str;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const decoded_arr = [];
    let temp = "";
    let length = 0;

    let i = 0;
    while (i < str.length) {
      if (str[i] === "#") {
        let p = i - 2;
        const length_arr = [];
        while (true) {
          if (str[p] === "|") break;
          length_arr.push(str[p]);
          p -= 1;
        }

        length = Number.parseInt(
          length_arr.reverse().reduce((acc, curr) => (acc += curr))
        );

        if (length === 0) {
          decoded_arr.push("");
        } else {
          for (let j = 1; j <= length; j++) {
            temp += str[i + j];
          }

          decoded_arr.push(temp);
          temp = "";
          i += length + 1;

          continue;
        }
      }
      i += 1;
    }

    return decoded_arr;
  }
}

const solution = new Solution();

const test_list = [
  ["neet", "code", "love", "you"],
  [""],
  ["we", "say", ":", "yes", "!@#$%^&*()"],
  ["#", "##"],
];
for (const test of test_list) {
  const encode_str = solution.encode(test);
  console.log(encode_str);
  console.log(solution.decode(encode_str));
}
