/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const el_mapping = {};

  for (const el of nums) {
    if (Object.hasOwn(el_mapping, el)) el_mapping[el] += 1;
    else el_mapping[el] = 1;
  }

  const counts = [];
  const count_mapping = {};
  for (const [el, count] of Object.entries(el_mapping)) {
    counts.push(count);
    if (!Object.hasOwn(count_mapping, count)) count_mapping[count] = [];
    count_mapping[count].push(el);
  }

  const ans = [];

  let set = new Set();

  for (const count of counts) {
    if (!set.has(count)) set.add(count);
  }

  const set_arr = [];
  for (const el of set) {
    set_arr.push(Number.parseInt(el));
  }

  set_arr.sort((a, b) => b - a);

  let index = 0;
  while (ans.length < k) {
    for (const el of count_mapping[set_arr[index]]) {
      if (ans.length !== k) {
        ans.push(Number.parseInt(el));
      } else {
        return ans;
      }
    }
    index += 1;
  }

  return ans;
};
