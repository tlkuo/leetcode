/*
 * @lc app=leetcode id=729 lang=typescript
 *
 * [729] My Calendar I
 */

// @lc code=start
class MyCalendar {

    tasks: [number, number][]

    constructor() {
        this.tasks = []
    }

    book(start: number, end: number): boolean {
        let i = 0

        // check if overlapped
        for (i = 0; i < this.tasks.length; i++) {
            const [s, e] = this.tasks[i]
            if (this.isOverlapped([s, e], [start, end])) {
                return false
            }
            if (s >= end) {
                break
            }
        }

        // add to calendar
        this.tasks = [
            ...this.tasks.slice(0, i),
            [start, end],
            ...this.tasks.slice(i)
        ]

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
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end


