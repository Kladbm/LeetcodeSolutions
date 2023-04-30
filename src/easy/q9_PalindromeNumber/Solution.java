package easy.q9_PalindromeNumber;

class Solution {
    public boolean isPalindrome(int x) {
        String number = String.valueOf(x);
        int length = number.length();
        for (int i = 0; i < length / 2; i++) {
            if (number.charAt(i) != number.charAt(length - i - 1)) {
                return false;
            }
        }

        return true;
    }
}
