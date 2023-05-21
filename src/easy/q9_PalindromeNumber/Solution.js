/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    num = x.toString().split("");
    for (let i = 0; i < num.length / 2; i++) {
        if (num[i] !== num[num.length - i - 1]) {
            return false;
        }
    }
    return true;
};