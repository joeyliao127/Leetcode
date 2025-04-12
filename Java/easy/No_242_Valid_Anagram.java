package easy;
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