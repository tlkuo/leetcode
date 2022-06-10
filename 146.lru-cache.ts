/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

class CacheNode {
    key: number
    value: number
    prev: CacheNode | null
    next: CacheNode | null

    constructor(key: number, value: number) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LRUCache {

    start: CacheNode
    end: CacheNode
    capacity: number
    cache: Map<number, CacheNode>

    constructor(capacity: number) {
        this.start = null
        this.end = null
        this.capacity = capacity
        this.cache = new Map()
    }

    get(key: number): number {

        // return -1 if the key not exists
        if (!this.cache.has(key)) {
            return -1
        }

        // move the node to start
        const node = this.cache.get(key)
        this.removeNode(node)
        this.prependNode(node)

        return node.value
    }

    put(key: number, value: number): void {
        let nodeToRemove: CacheNode

        // remove the node if the key exists
        if (this.cache.has(key)) {
            nodeToRemove = this.cache.get(key)
        }
        // remove the last node if exceed the capacity
        else if (this.cache.size >= this.capacity) {
            nodeToRemove = this.end
        }

        if (nodeToRemove) {
            this.removeNode(nodeToRemove)
        }

        // add the new node to start
        const newNode = new CacheNode(key, value)
        this.prependNode(newNode)
    }

    removeNode(node: CacheNode) {
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        if (node === this.start) {
            this.start = this.start.next
        }
        if (node === this.end) {
            this.end = this.end.prev
        }

        this.cache.delete(node.key)
    }

    prependNode(node: CacheNode) {
        node.prev = null
        node.next = this.start

        if (node.next) {
            node.next.prev = node
        }

        this.start = node

        if (this.end === null) {
            this.end = node
        }

        this.cache.set(node.key, node)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end




