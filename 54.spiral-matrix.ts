/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start

enum Direction {
    Right,
    Down,
    Left,
    Up,
}

function spiralOrder(matrix: number[][]): number[] {
    const output: number[] = []
    let direction: Direction = Direction.Right
    let row = 0, column = 0
    let turnCounter = 0

    while (true) {
        const currentElement = matrix[row][column]
        let nextElement: number

        if (typeof currentElement === 'number' && !isNaN(currentElement)) {
            output.push(currentElement)
            matrix[row][column] = NaN
        }

        switch (direction) {
            // right (column++)
            case Direction.Right:
                nextElement = matrix[row][column + 1]
                if (typeof nextElement === 'number' && !isNaN(nextElement)) {
                    column += 1
                    turnCounter = 0
                } else {
                    direction = Direction.Down
                    turnCounter += 1
                }
                break;
            // down (row++)
            case Direction.Down:
                nextElement = matrix[row + 1]?.[column]
                if (typeof nextElement === 'number' && !isNaN(nextElement)) {
                    row += 1
                    turnCounter = 0
                } else {
                    direction = Direction.Left
                    turnCounter += 1
                }
                break;
            // left (column--)
            case Direction.Left:
                nextElement = matrix[row][column - 1]
                if (typeof nextElement === 'number' && !isNaN(nextElement)) {
                    column -= 1
                    turnCounter = 0
                } else {
                    direction = Direction.Up
                    turnCounter += 1
                }
                break;
            // up (row--)
            case Direction.Up:
                nextElement = matrix[row - 1]?.[column]
                if (typeof nextElement === 'number' && !isNaN(nextElement)) {
                    row -= 1
                    turnCounter = 0
                } else {
                    direction = Direction.Right
                    turnCounter += 1
                }
                break;
        }

        if (turnCounter >= 4) {
            break
        }
    }

    return output

};
// @lc code=end


