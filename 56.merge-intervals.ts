/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    const output: number[][] = []

    // sort the intervals by start
    intervals.sort((a, b) => a[0] - b[0])

    // put the first interval to temp
    let [tmpStart, tmpEnd] = intervals[0]

    // loop the intervals from second element
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]

        // compare the temp end and interval start
        if (tmpEnd >= start) {
            // overlapped
            // set max of temp end and interval end as new temp end
            tmpEnd = Math.max(tmpEnd, end)
        } else {
            // not overlapped
            // put the temp interval to output
            output.push([tmpStart, tmpEnd])
            // put interval to temp 
            tmpStart = start
            tmpEnd = end
        }
    }

    output.push([tmpStart, tmpEnd])

    return output
};
// @lc code=end


