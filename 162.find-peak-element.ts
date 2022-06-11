/*
 * @lc app=leetcode id=162 lang=typescript
 *
 * [162] Find Peak Element
 */

// @lc code=start
function helper(nums: number[], start: number, end: number): number {
    // find the mid
    const mid = Math.floor((start + end) / 2)
    const midNum = nums[mid]
    const leftNum = (mid === 0) ? -Infinity : nums[mid - 1]
    const rightNum = (mid === nums.length - 1) ? -Infinity : nums[mid + 1]

    // check if mid value is the peak
    if (leftNum < midNum && rightNum < midNum) {
        return mid
    }

    // if the left element is greater than mid, find the left part
    if (leftNum > midNum) {
        return helper(nums, start, mid - 1)
    }

    // if the right element is greater than mid, find the right part
    if (rightNum > midNum) {
        return helper(nums, mid + 1, end)
    }
}

function findPeakElement(nums: number[]): number {

    return helper(nums, 0, nums.length - 1)
};
// @lc code=end


