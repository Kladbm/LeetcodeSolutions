/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function (matrix) {
    const n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n - 1 - i * 2; j++) {
            const temp = matrix[i][j + i];
            matrix[i][j + i] = matrix[n - j - i - 1][i];
            matrix[n - j - i - 1][i] = matrix[n - i - 1][n - j - i - 1];
            matrix[n - i - 1][n - j - i - 1] = matrix[j + i][n - i - 1];
            matrix[j + i][n - i - 1] = temp;
        }
    }
};