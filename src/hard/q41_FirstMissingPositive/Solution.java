package hard.q41_FirstMissingPositive;

import java.util.HashSet;
import java.util.Set;

class Solution {
    public int firstMissingPositive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }

        for (int i = 0; i < set.size(); i++) {
            if (!set.contains(i + 1)) {
                return i + 1;
            }
        }

        return set.size() + 1;
    }
}
