/*
 * @lc app=leetcode id=274 lang=typescript
 *
 * [274] H-Index
 */

// @lc code=start
function hIndex(citations: number[]): number {
    // [3, 0, 6, 1, 5]
    citations.sort((a, b) => b - a)
    // [6, 5, 3, 1, 0]

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] <= i) {
            return i
        }
    }

    return citations.length
};
// @lc code=end


