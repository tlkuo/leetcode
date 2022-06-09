/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] Word Break
 */

// @lc code=start
function helper(s: string, wordDict: string[], memo: Map<string, boolean>): boolean {
    // true if s is an empty string
    if (s === '') {
        return true
    }

    // return the result in cache if any
    if (memo.has(s)) {
        return memo.get(s)
    }

    // loop each word in dict
    for (const word of wordDict) {
        // if s starts with the word
        if (s.startsWith(word)) {
            // recursive the wordBreak with the remaining word
            const result = helper(s.slice(word.length), wordDict, memo)

            if (result === true) {
                memo.set(s, true)
                return true
            }
        }
    }

    // if s does not start with any word, return false
    memo.set(s, false)
    return false
}

function wordBreak(s: string, wordDict: string[]): boolean {
    const memo = new Map<string, boolean>()

    return helper(s, wordDict, memo)
};
// @lc code=end


