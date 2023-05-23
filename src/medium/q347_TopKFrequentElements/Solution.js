/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
let topKFrequent = function (nums, k) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }

    let array = Object.keys(obj).map((key) => [key, obj[key]])
    array = array.sort((a, b) => b[1] - a[1])

    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(parseInt(array[i][0]))
    }

    return result
};