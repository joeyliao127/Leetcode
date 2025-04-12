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


// 1. Two Sum
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] ans = new int[2];
        
        for(int i=0; i<nums.length; i++) {
            int sub = target - nums[i];
            for(int j=i+1; j<nums.length; j++) { 
                if(nums[j] == sub) {
                    ans[0] = i;
                    ans[1] = j;
                    return ans;
                }
            }
        }
        return ans;
    }
}