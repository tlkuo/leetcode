/*
 * @lc app=leetcode id=57 lang=typescript
 *
 * [57] Insert Interval
 */

// @lc code=start
function insert(intervals: number[][], newInterval: number[]): number[][] {
    const output: number[][] = []

    // loop each intervals
    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i]

        // when current.start < new.start
        if (currentInterval[0] < newInterval[0]) {
            // not overlapped, push current interval into output
            if (currentInterval[1] < newInterval[0]) {
                output.push(currentInterval)
            }
            // overlapped, merge and update as newInterval
            else {
                newInterval[0] = currentInterval[0]
                newInterval[1] = Math.max(currentInterval[1], newInterval[1])
            }
        }
        // when current.start == new.start
        else if (currentInterval[0] === newInterval[0]) {
            // overlapped, merge and update as newInterval
            newInterval[1] = Math.max(currentInterval[1], newInterval[1])
        }
        // when current.start > new.start
        else {
            // not overlapped, push new interval into output
            if (newInterval[1] < currentInterval[0]) {
                output.push(newInterval)
                // concat remaining intervals and return
                return output.concat(intervals.slice(i, intervals.length))
            }
            // overlapped, merge and update as newInterval
            else {
                newInterval[1] = Math.max(currentInterval[1], newInterval[1])
            }
        }
    }

    output.push(newInterval)
    return output
};
// @lc code=end



