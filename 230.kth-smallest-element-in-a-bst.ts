/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

const stack = []

function traceLeft(node: TreeNode) {
    let current = node

    stack.push(node)

    while (current.left) {
        current = current.left
        stack.push(current)
    }
}

function kthSmallest(root: TreeNode | null, k: number): number {
    traceLeft(root)

    let node: TreeNode = stack.pop()

    for (let i = 1; i < k; i++) {
        if (node.right) {
            traceLeft(node.right)
        }
        node = stack.pop()
    }

    return node.val
};
 // @lc code=end


