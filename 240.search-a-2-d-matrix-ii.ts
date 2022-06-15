/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
function helper(matrix: number[][], target: number,
    [fromRow, fromCol]: [number, number],
    [toRow, toCol]: [number, number]
): boolean {
    const midRow = Math.floor((fromRow + toRow) / 2)
    const midCol = Math.floor((fromCol + toCol) / 2)
    const midValue = matrix[midRow][midCol]

    if (midValue === target) {
        return true
    }

    if (fromRow === toRow && fromCol === toCol) {
        return false
    }

    if (target < midValue) {
        if (midRow > fromRow && helper(matrix, target, [fromRow, fromCol], [midRow - 1, toCol])) {
            return true
        }

        if (midCol > fromCol && helper(matrix, target, [midRow, fromCol], [toRow, midCol - 1])) {
            return true
        }
    }
    else if (target > midValue) {
        if (midCol < toCol && helper(matrix, target, [fromRow, midCol + 1], [midRow, toCol])) {
            return true
        }

        if (midRow < toRow && helper(matrix, target, [midRow + 1, fromCol], [toRow, toCol])) {
            return true
        }
    }

    return false
}

function searchMatrix(matrix: number[][], target: number): boolean {
    return helper(matrix, target, [0, 0], [matrix.length - 1, matrix[0].length - 1])
};
// @lc code=end


