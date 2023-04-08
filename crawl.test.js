
const { normalizeURL, getURLsFromHTML } = require('./crawl.js');
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


// To test if it returns a list of absolute urls if given a html body that contains only abosulte urls
// i.e if given https://www.facebook.com/ it should return ['https://www.facebook.com/']
test('getURLsFromHTML deals correctly with absolute urls', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://www.facebook.com/">
                Facebook Homepage
            </a>
        </body>
    </html>
    `
    const inputBaseUrl = 'https://www.facebook.com/'
    const expected = ['https://www.facebook.com/']
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseUrl)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})


// To test if it returns a list of absolute urls if given a html body that contains relative urls
// i.e if given /profile/ it should return ['https://www.facebook.com/profile']
test('getURLsFromHTML deals correctly with relative urls', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/profile/">
                Facebook Homepage
            </a>
        </body>
    </html>
    `
    const inputBaseUrl = 'https://www.facebook.com'
    const expected = ['https://www.facebook.com/profile/']
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseUrl)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})


// To test if it returns a list of absolute urls if given a html body that contains relative urls
// i.e if given /profile/ it should return ['https://www.facebook.com/profile']
test('getURLsFromHTML deals correctly with relative and absolute urls', () => {
    // NOTE: It's important to know that the html object would directly add a tag's href a trailing slash if there isn't any
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://www.facebook.com/">
                Facebook hoohoo
            </a>
            <a href="/settings/">
                Facebook lala
            </a>
        </body>
    </html>
    `
    const inputBaseUrl = 'https://www.facebook.com'
    const expected = ['https://www.facebook.com/', 'https://www.facebook.com/settings/']
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseUrl)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})


// To test if it does not return invalid urls
// i.e if given "invalid" in href of 'a' tag, it should effective ignore it
test('getURLsFromHTML deals correctly with invalid urls', () => {
    // NOTE: It's important to know that the html object would directly add a tag's href a trailing slash if there isn't any
    const inputHTMLBody = `
    <html>
        <body>
            <a href="invalid">
                Facebook hoohoo
            </a>
        </body>
    </html>
    `
    const inputBaseUrl = 'https://www.facebook.com'
    const expected = []
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseUrl)
     // State the actual is to equal to expected
     expect(actual).toEqual(expected)
})


