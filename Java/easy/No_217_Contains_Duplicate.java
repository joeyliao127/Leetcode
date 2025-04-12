package easy;
// 217. Contains Duplicate
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Map<Integer, Boolean> map = new HashMap<Integer, Boolean>();
        if(nums.length == 0) {
            return false;
        }

        for(int i=0; i < nums.length; i++) {
            if(map.containsKey(nums[i])) {
                return true;
            } else {
                map.put(nums[i], true);
            }
        }

        return false;
    }
}