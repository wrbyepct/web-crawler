
function printReport(pages) {
    console.log("==============")
    console.log("LINK REPORT")
    console.log("==============")
    const sortedPages = sortPages(pages)
    for (const page of sortedPages) {
        hits = page[1]
        urls = page[0]
        console.log(`Found ${hits} links in page: ${page[0]}`)
    }
    console.log("==============")
    console.log("END REPORT")
    console.log("==============")
}



function sortPages(pages) {
    // The js way to convert dict to tuple
    const pagesArr = Object.entries(pages) 
    pagesArr.sort((a, b) => {
        aValue = a[1]
        bValue = b[1]
        return bValue - aValue
    }) 

    return pagesArr
}




// Make the function availabe for other files
module.exports = {
    sortPages,
    printReport
}