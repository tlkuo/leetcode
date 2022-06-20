/*
 * @lc app=leetcode id=731 lang=typescript
 *
 * [731] My Calendar II
 */

// @lc code=start
class MyCalendarTwo {

    task: [number, number][]
    overlap: [number, number][]

    constructor() {
        this.task = []
        this.overlap = []
    }

    book(start: number, end: number): boolean {

        let i = 0

        // check if overlapped
        for (i = 0; i < this.overlap.length; i++) {
            const [s, e] = this.overlap[i]
            if (this.isOverlapped([s, e], [start, end])) {
                return false
            }
        }

        for (i = 0; i < this.task.length; i++) {
            const [s, e] = this.task[i]
            if (this.isOverlapped([s, e], [start, end])) {
                this.overlap.push([Math.max(s, start), Math.min(e, end)])
            }
        }

        // add to calendar
        this.task.push([start, end])

        return true
    }

    isOverlapped([s1, e1], [s2, e2]): boolean {
        if (e1 <= s2 || e2 <= s1) {
            return false
        }
        return true
    }
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
