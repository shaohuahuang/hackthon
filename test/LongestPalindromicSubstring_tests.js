import assert from "assert"
import { getLongestPalindromicSubstring } from "../algorithm/LongestPalindromicSubstring"

describe("test LongestPalindromicSubstring", () => {
    it("test getLongestPalindromicSubstring", () => {
        assert.equal("bab", getLongestPalindromicSubstring("babad"))
    })

    it("test getLongestPalindromicSubstring", () => {
        assert.equal("bb", getLongestPalindromicSubstring("cbbd"))
    })
})
