
const { normalizeURL } = require('./crawl.js');
const { test, expect } = require('@jest/globals')


// There are 4 components for test function 
// First, the function you want to test, and the name of the test function(be as decriptive as possible)'
// Second, the input
// Third, the expected output you want 
// Fourh, the autal output produced by the function 

// This is how you write a simple test function in node.js
// To test if it strips away protocol
// i.e. If given'https://www.facebook.com' it should return 'www.facebook.com'
test('normalizeURL strips protocol', () => {
    const input = 'https://www.facebook.com'
    const expected = 'www.facebook.com'
    const actual = normalizeURL(input)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})

// To test if it strips away the trailing slash '/'
// i.e if given 'www.facebook.com/' you want it to be 'www.facebook.com'
test('normalizeURL strips trailing slash', () => {
    const input = 'https://www.facebook.com/'
    const expected = 'www.facebook.com'
    const actual = normalizeURL(input)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})

// To test if it converts all english letter into lowercase
// i.e if given 'https://www.facebook.com/' you want it to be 'www.facebook.com'
test('normalizeURL converts all English letter to lowercase', () => {
    const input = 'https://wwW.Facebook.coM/'
    const expected = 'www.facebook.com'
    const actual = normalizeURL(input)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})