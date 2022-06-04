/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
enum AttendanceStatus {
    Absent = 'A',
    Late = 'L',
    Present = 'P',
}

function checkRecord(s: string): boolean {
    // count the times of absent
    let absentCounter = 0
    // count the consecutives days of late
    let lateCounter = 0

    // loop the string character
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i) as AttendanceStatus
        // 'A', then absent counter + 1
        if (char === AttendanceStatus.Absent) {
            absentCounter++
        }
        // 'L', then late counter + 1
        if (char === AttendanceStatus.Late) {
            lateCounter++
        }
        // others, reset late counter
        else {
            lateCounter = 0
        }

        // false if absent >= 2 days or late >= 3 consecutive days
        if (absentCounter >= 2 || lateCounter >= 3) {
            return false
        }
    }

    return true
};
// @lc code=end


