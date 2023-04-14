// This is how you write a simple test function in node.js

const { sortPages } = require("./report.js")
const {test, expect} = require("@jest/globals")
// 
test('sortPages return sorted array of size 2, highest count first', () => {
    const input = {
        "vnwinejfewff": 2,
        "sdfsdfdsfsdf": 3
    }
    const expected = [
        ["sdfsdfdsfsdf", 3],
        ["vnwinejfewff", 2]
    ]
    const actual = sortPages(input)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})


test('sortPages return sorted array of size 5, highest count first', () => {
    const input = {
        "guava bomb": 2,
        "orage pup": 3,
        "sandwitch serial killer": 10,
        "FBI auntie, single": 7,
        "July junkie": 100
    }
    const expected = [
        ["July junkie", 100],
        ["sandwitch serial killer", 10],
        ["FBI auntie, single", 7],
        ["orage pup", 3],
        ["guava bomb", 2]
    ]
    const actual = sortPages(input)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})


