/*
 * @lc app=leetcode id=166 lang=typescript
 *
 * [166] Fraction to Recurring Decimal
 */

// @lc code=start
function fractionToDecimal(numerator: number, denominator: number): string {

    if (numerator === 0) {
        return '0'
    }

    let result = ''

    // sign
    if (numerator > 0 && denominator < 0 || numerator < 0 && denominator > 0) {
        result += '-'
    }
    
    const dividend = Math.abs(numerator)
    const divisor = Math.abs(denominator)
    // integer
    result += Math.floor(dividend / divisor)

    // remaining
    let remaining = dividend % divisor

    if (remaining !== 0) {
        result += '.'
    }

    const cache = new Map<number, number>()

    while (remaining !== 0) {

        if (cache.has(remaining)) {
            const i = cache.get(remaining)
            result = result.slice(0, i) + '(' + result.slice(i) + ')'
            break;
        }

        cache.set(remaining, result.length)

        remaining *= 10
        result += Math.floor(remaining / divisor)
        remaining %= divisor
    }

    return result
};
// @lc code=end


