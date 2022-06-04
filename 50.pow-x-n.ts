/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    // 2 ** 10
    // (2 ** 5) * (2 ** 5)
    // (2 ** 2) * (2 ** 2) * (2 ** 1) * (2 ** 5)

    if (n === 0) {
        return 1
    } else if (n === 1) {
        return x
    } else if (n < 0) {
        return 1 / myPow(x, n * -1)
    }

    const pow = myPow(x, Math.floor(n / 2))

    return pow * pow * (n % 2 === 1 ? x : 1)

};
// @lc code=end


