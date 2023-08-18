/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {

    if (digits === '') {
        return [];
    }

    const array = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    const iterate = (nums) => {
        let answer = [];
        if (nums.length === 1) {
            return array[nums];
        }
        let first = nums.slice(0, 1);
        let second = iterate(nums.slice(1));

        for (let digit of array[first]) {
            for (let digit_ of second) {
                answer.push(digit + digit_);
            }
        }
        return answer;
    }

    return iterate(digits)
};