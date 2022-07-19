/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const romanMap = new Map<string, number>([
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000],
    ]);

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const next = (i + 1 < s.length) ? s[i+1] : '';

        if (romanMap.has(current + next)) {
            result += romanMap.get(current + next) || 0;
            i += 1;
        } else {
            result += romanMap.get(current) || 0;
        }
    }

    return result;
};
// @lc code=end

