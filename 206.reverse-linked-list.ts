/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    let newHead = null;
    let currentNode = head;

    while (currentNode !== null) {
        const next = currentNode.next;
        currentNode.next = newHead;
        newHead = currentNode;
        currentNode = next;
    }

    return newHead;
};
// @lc code=end

