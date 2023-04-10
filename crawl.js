// Write a stubbed out function 

const { JSDOM } = require('jsdom')

async function crawlPage(curretnURL){
    console.log(`Actively crawling ${curretnURL}`)
    // Making the request to the  website 
    try {
        const res = await fetch(curretnURL)
        console.log(await res.text())
        if (res.status > 399) {
            console.log(`error in fetch with status code ${res.status} on page: ${curretnURL}`)
            return
        }
        // Get the content type of the page
        const contentType = res.headers.get("content-type")
        if (!contentType.includes("text/html")) {
            console.log(`Not a html response, content type: ${contentType} on page: ${curretnURL}`)
        }
    } catch (err) {
        // Handle invalid input
        console.log(`error in fetch: ${err.message}, on page: ${curretnURL}`)
    }
    
}

function getURLsFromHTML(htmlBody, baseUrl){
    const urls = []
    const dom = new JSDOM(htmlBody) // This can convert a html body to a structured objects, so that we can easily access the properies of this html
    const linkElements = dom.window.document.querySelectorAll('a') // This can access the information of the tag in html you specified

    // In this case, you want to access the 'href' of the a 'tag'
    // There are 3 scenarios of link.href
    // One it's a invalid url -> Then use URL object to detect error
    // Second is that it's relative url -> then concatenate the relative url with base url 
    // Third, is that it's absoute url -> just return the urls 
    for (const link of linkElements) {
        if (link.href[0] === '/'){
            // it's a relative url
            try {
                const urlObj = new URL(`${baseUrl}${link.href}`)
                urls.push(urlObj.href)
            } catch(err) {
                console.log(`Error with relative url: ${err.message}`)
            }
            
        } else {
            // when it's a absolute url
            try {
                const urlObj = new URL(link.href)
                urls.push(urlObj.href)
            } catch(err) {
                console.log(`Error with absolute url: ${err.message}`)
            }
            
        }
    }
    return urls
}


function normalizeURL(urlString) {
    // First convert urlString to URL object using built-in URL constructor
    // Initiate a URL object
    const urlObj = new URL(urlString) 
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`

    // There are 2 scenarios of host
    // One is that hostPath is not empty AND ends with a slash -> Then reuturn hostPath string except the last character
    // The other is not -> Just return hostPath
    if (hostPath.length > 0 && hostPath.endsWith('/')) {
        return hostPath.slice(0, -1)
    }
    return hostPath
}

// normalizeURL('https://www.facebook.com/')

// Make the function availabe for other files
module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}