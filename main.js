const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')


// The main function would be: given a valid website url as a command line arugument, it should be able to start crawling all links from that website
 async function main(){
    if (process.argv.length < 3) {
        console.log("No website provided.")
        process.exit(1)
    }
    if (process.argv.length < 3) {
        console.log("Too many command line args")
        process.exit(1)
    }

    const baseURL = process.argv[2]
    console.log(`start crawling website: ${baseURL}`)
    
    const pages = await crawlPage(baseURL, baseURL, {})
    
    printReport(pages)

    // Urls to crawl:  https://wagslane.dev
    

}


main()