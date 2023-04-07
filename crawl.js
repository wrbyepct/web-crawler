// Write a stubbed out function 
function normalizeURL(urlString) {
    // First convert urlString to URL object using built-in URL constructor
    // Initiate a URL object
    const urlObj = new URL(urlString) 
    console.log(urlObj.pathname)
    console.log(urlObj.host)
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
    normalizeURL
}