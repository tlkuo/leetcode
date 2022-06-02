/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    // create a stack
    const stack: string[] = []
    const bracketPair = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ])

    // loop each character
    for (let i = 0; i < s.length; i++) {
        const bracket = s[i]

        // push if it is an open bracket
        if (bracketPair.has(bracket)) {
            stack.push(bracket)
        }
        // pop if others
        else {
            const openBracket = stack.pop()

            // error if none in the queue
            if (openBracket === undefined) {
                return false
            }

            // error if bracket is not in pair
            if (bracketPair.get(openBracket) !== bracket) {
                return false
            }
        }
    }

    // success if stack is empty
    return stack.length === 0
};
// @lc code=end


