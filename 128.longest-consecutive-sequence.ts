/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    // put the numbers into Set
    const map = new Map<number, any>()
    let maxLength = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const left = map.get(num - 1)
        const right = map.get(num + 1)

        // skip if duplicated
        if (map.has(num)) {
            continue
        }

        // handle without left and right
        if (!left && !right) {
            map.set(num, { start: num, end: num })
            maxLength = Math.max(maxLength, 1)
        }
        // handle left only
        else if (!right) {
            map.set(num, { start: left.start, end: num })
            map.set(left.start, { start: left.start, end: num })
            maxLength = Math.max(maxLength, num - left.start + 1)
        }
        // handle right only
        else if (!left) {
            map.set(num, { start: num, end: right.end })
            map.set(right.end, { start: num, end: right.end })
            maxLength = Math.max(maxLength, right.end - num + 1)
        }
        // handle with left and right
        else {
            map.set(num, { start: left.start, end: right.end })
            map.set(left.start, { start: left.start, end: right.end })
            map.set(right.end, { start: left.start, end: right.end })
            maxLength = Math.max(maxLength, right.end - left.start + 1)
        }
    }

    return maxLength
};
// @lc code=end



