package medium.q36_ValidSudoku;

import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean isValidSudoku(char[][] board) {

        for (int i = 0; i < 9; i++) {
            Set<Character> set = new HashSet<>();
            for (int j = 0; j < 9; j++) {
                char num = board[i][j];
                if (num != '.' && set.contains(num)) {
                    return false;
                }
                set.add(num);
            }
        }

        for (int j = 0; j < 9; j++) {
            Set<Character> set = new HashSet<>();
            for (int i = 0; i < 9; i++) {
                char num = board[i][j];
                if (num != '.' && set.contains(num)) {
                    return false;
                }
                set.add(num);
            }
        }

        for (int j = 0; j < 9; j++) {
            Set<Character> set = new HashSet<>();
            for (int i = 0; i < 9; i++) {
                char num = board[i][j];
                if (num != '.' && set.contains(num)) {
                    return false;
                }
                set.add(num);
            }
        }

        for (int i = 0; i < 9; i += 3) {
            for (int j = 0; j < 9; j += 3) {
                Set<Character> set = new HashSet<>();
                for (int k = 0; k < 9; k++) {
                    int row = i + k / 3;
                    int col = j + k % 3;
                    char digit = board[row][col];
                    if (digit != '.' && set.contains(digit)) {
                        return false;
                    }
                    set.add(digit);
                }
            }
        }

        return true;
    }
}
