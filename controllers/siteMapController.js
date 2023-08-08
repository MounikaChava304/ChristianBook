const siteMapper = require('sitemapper');
const cheerio = require('cheerio');
const axios = require('axios');

let bookDetails = [];
let bookUrl = '';
let skuNum = '';


//Function to get the last part of URL which is skuNum in this case
function getLastPart(url) {
    const parts = url.split('/');
    return parts.at(-1);
}

//Function to extract urls for sitemap.xml file
async function getSiteMapUrls(skuNum) {
    const sitemapper = new siteMapper({
        url: 'https://www.christianbook.com/sitemap4.xml',
        rejectUnauthorized: true,
        timeout: 15000,
        requestHeaders: {
            'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0',
        },
    });

    sitemapper
        .fetch()
        .then((data) => {
            for (let element of data.sites) {
                //console.log(getLastPart(element))
                //check if the skuNum entered matches the skuNum in the URL to fetch the URL
                if (getLastPart(element) == skuNum) {
                    bookUrl = element;
                    //console.log(bookUrl);
                    break;
                } else {
                    bookUrl = '';
                }
            }
        }
        )
        .catch((error) => {
            console.log(error);
        });

    return bookUrl;
}


async function getBookDetails() {

    bookDetails = [];

    const axiosResponse = await axios.request({
        method: "GET",
        url: bookUrl,
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })

    // parsing the HTML source of the target web page with Cheerio
    const $ = cheerio.load(axiosResponse.data);
    $('.product-main-content').each((i, el) => {
        bookName = $(el)
            .find('.CBD-ProductDetailInfo')
            .find('h1.CBD-ProductDetailTitle')
            .text();
        bookDetails.push(bookName);

        author = $(el)
            .find('.CBD-ProductDetailInfo')
            .find('.CBD-ProductDetailAuthorLink')
            .text();

        bookDetails.push(author);

        price = $(el)
            .find('.CBD-ProductDetailActionPrice')
            .text();
        price = "$ " + (price.split("$").pop());
        bookDetails.push(price);
        // console.log(bookDetails)

        return bookDetails;
    })
}

const sendBookDetails = async (req, res) => {

    skuNum = await req.body.searchForSkuNumber;
    //console.log(skuNum);

    try {
        getSiteMapUrls(skuNum);
    } catch (err) {
        console.log(err);
    }

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    if (bookUrl != '') {
        try {
            await getBookDetails();
            return res.send(bookDetails);
        } catch (err) {
            return res.json({
                err: err.toString(),
            });
        }
    } else {
        bookDetails = []
        return res.send(bookDetails);
    }
}

module.exports = { sendBookDetails };
