package easy.q12_IntegerToRoman;

class Solution {
    public String intToRoman(int num) {
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] numbers = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        String answer = "";

        int i = 0;
        while (num > 0) {
            if (num >= values[i]) {
                answer += numbers[i];
                num -= values[i];
            } else {
                i++;
            }
        }

        return answer;
    }
}
