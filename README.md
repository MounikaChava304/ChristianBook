# ChristianBook

How Does Your System Work?

This system works by taking user input in the welcome page(https://localhost:5000). It posts the search value as input request to the api using fetch request. When the api gets post request (/find), the system uses a sitemapper package in Node js to extract urls from https://www.christianbook.com/sitemap4.xml and checks for the SKU Number in each url with the input data sent from the client. If there is a match, then an axios request is made to the url to perform scraping of a website. For this the system uses a Node js package named Cheerio. Using cheerio the system fetches data using html attributes and pushes them on to array names bookDetails and returns that to the client.If there is no match, it returns an empty array. When the client receives a response, the system displays the data from the server on the front end page using HTML and Javascript.

How could you scale your system to search across all sitemap files?

The system is made to utilize the sitemapper package in Node js to search across the sitemap file. To increase the scalability we can find a way to split and access the sitemap file data.

How will your system perform with 100 users? 10,000 users? 1,000,000 users?

This system may work well with 100 users. But for 10,000 and more users there could be an efficient way to handle all the requests as to search the vast sitemap files. I think there is always a scope to improve efficiency and with spending more time on this, there should be a way to improve efficiency.

What documentation, websites, papers etc did you consult in doing this assignment?

https://cheerio.js.org/docs/intro, https://www.npmjs.com/package/sitemapper . These two are the major learnings for me in doing this assignment.

How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?

I have spent almost 6 days working for this assignment. As I had to learn about implementing siteMapper and cheerio in this assignment which is totally new learning for me. If I had more time to spend on this, I would try to work more on the front end and also work on improving the efficiency of the system.

If you were to critique your code, what would you have to say about it?

I have put my maximum efforts in learning and improving my skills working on this assignment. But there is always room for improvements and new learnings. Since I do not have any real time working experience I think there is a lot of scope for me to improve my skills and coding.

How can you change your system be updated to support simple keyword searches?
I can take inputs and learn to do the changes. This system takes only one input element in the search item to fetch the data. If there is a any other way to keep the system updated, I am always willing to do so.


