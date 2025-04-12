/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let p_left = 0;
  let p_right = s.length - 1;

  while (p_left <= p_right) {
    const char_left = mappingAlphabet(s.charAt(p_left));
    if (char_left === -1) {
      p_left += 1;
      continue;
    }

    const char_right = mappingAlphabet(s.charAt(p_right));
    if (char_right === -1) {
      p_right -= 1;
      continue;
    }

    if (char_left !== char_right) {
      return false;
    } else {
      p_left += 1;
      p_right -= 1;
    }
  }

  return true;
};

function mappingAlphabet(char) {
  const alphabet_map = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "p",
    q: "q",
    r: "r",
    s: "s",
    t: "t",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    z: "z",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };

  return Object.hasOwn(alphabet_map, char) ? alphabet_map[char] : -1;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
