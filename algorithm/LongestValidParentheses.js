export function getLengthOfLongestValidString(input) {
    const stack = []
    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        if (char === "(") stack.push(i)
        else if (stack.length === 0) {
            stack.push(i)
        } else {
            const top = stack[stack.length - 1]
            if (input[top] === "(") stack.pop()
            else stack.push(i)
        }
    }
    if (stack.length === 0) return input.length
    let longest = stack[0]
    for (let i = 0; i < stack.length - 1; i++) {
        longest = Math.max(longest, stack[i + 1] - stack[i] - 1)
    }
    return Math.max(longest, input.length - stack[stack.length - 1] - 1)
}

/*
    Question:
        Given a string containing just the characters '(' and ')', find the length of the longest valid (well formed) parentheses substring

    Input ")()())" ==> 4 | substring is ()()
*/
