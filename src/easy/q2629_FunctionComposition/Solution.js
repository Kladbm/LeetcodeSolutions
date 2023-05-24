/**
 * @param {Function[]} functions
 * @return {Function}
 */
let compose = function (functions) {
    return function (x) {
        let final = x;
        functions.reverse();
        return functions.reduce((final, fn, index) => final = fn(final), x);
    }
};