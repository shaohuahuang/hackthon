export function getLongestPalindromicSubstring(input) {
    const length = input.length
    if (length <= 1) return input

    const string = input.substr(0, length - 1)
    const longest = getLongestPalindromicSubstring(string)
    const longestLength = longest.length
    let candidate = ""
    if (isValid(input.substring(length - 1 - longestLength)))
        candidate = input.substring(length - 1 - longestLength)
    if (isValid(input.substring(length - 2 - longestLength)))
        candidate = input.substring(length - 2 - longestLength)
    return longestLength >= candidate.length ? longest : candidate
}

function isValid(string) {
    const length = string.length
    const mid = Math.floor(length / 2)
    for (let i = 0; i < mid; i++) {
        if (string[i] !== string[length - 1 - i]) return false
    }
    return true
}

/*

 Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

 Example 1:

 Input: "babad"
 Output: "bab"
 Note: "aba" is also a valid answer.
 Example 2:

 Input: "cbbd"
 Output: "bb"

*/

/*
 imagine xxxbcbxxxxxa
 assume bcb is longest for xxxbcbxxxxx
 For xxxbcbxxxxxa, we only need to consider xxxa and xxxxa

 The reason why we do not need to consider xxxxxa is:
 if xxxxxa is valid, then xxxx will also be valid, which will be more than bcb

*/
