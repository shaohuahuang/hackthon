import assert from "assert"
import { getLengthOfLongestValidString } from "../algorithm/LongestValidParentheses"

describe("test LongestValidParentheses", () => {
    describe("test getLengthOfLongestValidString", () => {
        it("test ()()(", () => {
            const input = "()()("
            assert.equal(4, getLengthOfLongestValidString(input))
        })
    })

    describe("test getLengthOfLongestValidString", () => {
        it("test ()()(", () => {
            const input = "())(()"
            assert.equal(2, getLengthOfLongestValidString(input))
        })
    })
})
