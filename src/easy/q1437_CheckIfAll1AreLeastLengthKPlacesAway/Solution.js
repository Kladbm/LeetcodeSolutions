/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let kLengthApart = function(nums, k) {
    let index = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i - index <= k) {
                return false;
            } else {
                index = i;
            }
        }
    }

    return true
};