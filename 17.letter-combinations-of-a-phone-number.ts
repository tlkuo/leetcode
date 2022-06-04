/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    const digitToLetters = [
        [],		// 0
        [],		// 1
        ['a', 'b', 'c'],	// 2
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z'],
    ]
    let output: string[] = []

    // loop the digits
    for (let i = 0; i < digits.length; i++) {
        const currentDigit = digits[i]

        if (i === 0) {
            output = digitToLetters[currentDigit]
        } else {
            // clone the output before
            // append the possible letters of current digit to each output
            output = output
                // ['a', 'b', 'c']
                .map(o => digitToLetters[currentDigit].map(d => o + d))
                // [ ['ad', 'ae', 'af'], ['bd', 'be', 'bf'], ['cd', 'ce', 'cf'] ]
                .flat()
                // [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
        }
    }

    return output
};
// @lc code=end


