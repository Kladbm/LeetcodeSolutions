/**
 * @param {number} n
 * @return {number}
 */
let trailingZeroes = function (n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let num = i;

        while (num % 5 === 0) {
            num /= 5;
            count++;
        }
    }

    return count;
};

console.log(trailingZeroes(6));