/*
 * @lc app=leetcode id=284 lang=typescript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {

    peeked: number | null;
    iterator: Iterator

    constructor(iterator: Iterator) {
        this.peeked = null;
        this.iterator = iterator;
    }

    peek(): number {
        if (this.peeked === null) {
            this.peeked = this.iterator.next() as number;
        }

        return this.peeked;
    }

    next(): number {
        if (this.peeked === null) {
            return this.iterator.next();
        }

        const peeked = this.peeked;
        this.peeked = null;
        return peeked
    }

    hasNext(): boolean {
        return this.peeked === null ? this.iterator.hasNext() : true;
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end

