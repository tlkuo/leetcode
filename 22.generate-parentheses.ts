/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
const answerMap = new Map<number, string[]>([
    [1, ['()']]
])

function generateParenthesis(n: number): string[] {

    if (answerMap.has(n)) {
        return answerMap.get(n)
    }

    // handle case: (p)
    const parenthesis = generateParenthesis(n - 1).map(p => `(${p})`)

    // handle case: ()p, p()
    for (let i = 1; i < n; i++) {
        const leftPartition = generateParenthesis(i)
        const rightPartition = generateParenthesis(n - i)
        // left: [a, b, c]
        // right: [d, e, f]
        const merged = leftPartition
            // [a, b, c]
            .map(left => rightPartition.map(right => left + right))
            // [[ad, ae, af], [bd, be, bf], [cd, ce, cf]]
            .flat()
            // [ad, ae, af, bd, be, bf, cd, ce, cf]
        parenthesis.push(...merged)
    }

    // unique the parenthesis
    const answer = Array.from(new Set(parenthesis))

    answerMap.set(n, answer)

    return answer
};
// @lc code=end


