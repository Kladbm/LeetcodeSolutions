/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {

    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    if (s.length % 2 === 1) {
        return false
    }

    if (s[0] === "]" || s[0] === ")" || s[0] === "}") {
        return false
    }

    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") {
        return false
    }


    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])
        } else if (brackets[stack.pop()] !== s[i]) {
            return false
        }
    }

    return stack.length === 0
};