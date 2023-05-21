/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function (nums) {

    nums = nums.sort((a, b) => a - b);
    let result = 0;
    for (let i = nums.indexOf(0); i < nums.length; i++) {
        if (nums[i] > 0) {
            if (nums[i] !== nums[i - 1]) {
                result += 1;
            }
            if (nums[i] !== result) {
                return result;
            }
            if (i === nums.length - 1) {
                return nums[i] + 1;
            }
        }
    }
    return 1;
};