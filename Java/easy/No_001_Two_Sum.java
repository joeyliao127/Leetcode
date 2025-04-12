package easy;
import java.util.HashMap;
import java.util.Map;

public class Solution {
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
} {
	
}
