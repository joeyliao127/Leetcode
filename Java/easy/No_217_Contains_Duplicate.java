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

// 242. Valid Anagram
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> smap = countingCharacter(s);
        Map<Character, Integer> tmap = countingCharacter(t);

        if (smap.size() != tmap.size()) {
            return false;
        }

        for (Map.Entry<Character, Integer> entry : smap.entrySet()) {
            if (!tmap.containsKey(entry.getKey()) ||
                !tmap.get(entry.getKey()).equals(entry.getValue())) {
                return false;
            }
        }

        return true;
    }

    private Map<Character, Integer> countingCharacter(String word) {
        Map<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < word.length(); i++) {
            char currentChar = word.charAt(i); 
            map.put(currentChar, map.getOrDefault(currentChar, 0) + 1);
        }
        return map;
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