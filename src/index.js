module.exports = function check(str, bracketsConfig) {
    function isOpeningBracket(char) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (char === bracketsConfig[i][0]) {
                return true;
            }
        }
        return false;
    }
    function isClosingBracket(char) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (char === bracketsConfig[i][1]) {
                return true;
            }
        }
        return false;
    }
    function getClosingBracket(openingBracket) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketsConfig[i][0] === openingBracket) {
                return bracketsConfig[i][1];
            }
        }
    }
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (isClosingBracket(str[i]) && isOpeningBracket(str[i])) {
            let lastOpenBracket = stack[stack.length - 1];
            if (lastOpenBracket === str[i]) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        } else if (isOpeningBracket(str[i])) {
            stack.push(str[i]);
        } else if (isClosingBracket(str[i])) {
            let lastOpenBracket = stack.pop();
            if (str[i] === getClosingBracket(lastOpenBracket)) {
                continue;
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
