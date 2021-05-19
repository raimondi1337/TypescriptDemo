**1. What would you add to your solution of you had more time?**

The rest of the requirements, bucket sizing controls, nice fill bars, subtle update highlights, totals and proper order. I would spend some time figuring out an actually useful data structure for storing the price data while allowing me to efficiently compute the totals and manipulate the order. I don't like the key:value solution I'm using right now.
Assuming this is part of a larger app - I would implement redux and handle the websocket ingestion with middleware, and write some fine-grained selectors to connect smaller subcomponents to the store state to limit re-renders. Also implement some kind of UI library such as Material UI and use that as a basis for reusable components and CSS.

**2. What would you have done differently if you knew this page was going to get thousands of views per second vs per week?**

Make it look prettier and feature complete so that I'm not embarrassed. Maybe rate limit the upload speed to dave the server, but I the backend should already handle that itself.

**3. What was the most useful feature that was added to the latest version of your chosen language?**

This was the first time I have ever used TypeScript, so this entire submission is brand new for me. I'm not sold on the efficacy of static typing in JS yet, but that might just be because I haven't used static typing in almost 10 years.

**4. How would you track down a performance issue in production? Have you ever had to do this?**

I don't believe I have ever found a front end performance issue that could not be replicated by connecting my local front end to the production backend. If this were the case, I would suspect a backend or service issue and perhaps deploy some additional monitoring temporarily to track it down.

**5. Can you describe a common security concern to consider for a frontend developer?**

Most of my security concerns relate to auth, data enumeration or package vulnerabilities. Using a standard and maintained auth package, controlling error message data and keeping packages up to date take care of most of that. Input sanitization always comes to mind, but it's impossible to prevent bad actors from circumventing that on the front end.

**6. How would you improve the [*redacted*] API that you just used?**

The only thing that comes to mind is providing additional parameters for formatting the data stream, but I imagine this endpoint is already highly optimized by people that know far more than me about streaming data, and that the decision not to allow users to play with the output is purposeful for performance reasons and enforcing separation of concerns between the front end and back end.