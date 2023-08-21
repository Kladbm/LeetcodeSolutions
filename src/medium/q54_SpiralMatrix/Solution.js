/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
    const result = [];
    let i = 0;
    let row = matrix[0].length;
    let j = 0;
    let column = matrix.length;

    while (i < row && j < column) {

        for (let k = i; k < row; k++) {
            result.push(matrix[j][k]);
        }
        j++;

        for (let k = j; k < column; k++) {
            result.push(matrix[k][row - 1]);
        }
        row--;

        if (i < row && j < column) {
            for (let k = row - 1; k >= i; k--) {
                result.push(matrix[column - 1][k]);
            }
            column--;

            for (let k = column - 1; k >= j; k--) {
                result.push(matrix[k][i]);
            }
            i++;
        }
    }

    return result;
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));