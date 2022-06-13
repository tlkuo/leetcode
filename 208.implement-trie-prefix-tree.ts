/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
class TrieNode {
    characters: Map<string, TrieNode> = new Map()
    complete: boolean = false
}

class Trie {

    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let cNode = this.root

        for (let i = 0; i < word.length; i++) {
            const c = word[i]
            if (!cNode.characters.has(c)) {
                cNode.characters.set(c, new TrieNode())
            }
            cNode = cNode.characters.get(c)
        }

        cNode.complete = true
    }

    search(word: string): boolean {
        let cNode = this.root

        for (let i = 0; i < word.length; i++) {
            const c = word[i]
            if (!cNode.characters.has(c)) {
                return false
            }
            cNode = cNode.characters.get(c)
        }

        return cNode.complete
    }

    startsWith(prefix: string): boolean {
        let cNode = this.root

        for (let i = 0; i < prefix.length; i++) {
            const c = prefix[i]
            if (!cNode.characters.has(c)) {
                return false
            }
            cNode = cNode.characters.get(c)
        }

        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


