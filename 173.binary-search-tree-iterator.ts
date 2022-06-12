/*
 * @lc app=leetcode id=173 lang=typescript
 *
 * [173] Binary Search Tree Iterator
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {

    root: TreeNode | null

    constructor(root: TreeNode | null) {
        this.root = root
    }

    next(): number {
        let parent = null
        let current = this.root

        // get the min number
        while (current.left !== null) {
            parent = current
            current = current.left
        }

        // remove current node
        if (current === this.root) {
            this.root = current.right
        }
        else {
            parent.left = current.right
        }

        return current.val
    }

    hasNext(): boolean {
        return this.root !== null
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end


