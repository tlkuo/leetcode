/*
 * @lc app=leetcode id=133 lang=typescript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

// map old node to new node
const map = new Map<Node, Node>()

function cloneGraph(node: Node | null): Node | null {
    if (node === null) {
        return null
    }

    if (!map.has(node)) {
        const newNode = new Node(node.val)
        map.set(node, newNode)
        newNode.neighbors = node.neighbors.map(n => {
            return cloneGraph(n)
        })
    }

    return map.get(node)
};
// @lc code=end


