# Project 2: Mountain Project Browser
+ By: *Cole Crawford*
+ Production URL: <https://e28project2.coledcrawford.me/>

## Project sketch
I've been thinking about building a comprehensive activity tracking and mountain training website. Strava works well for logging runs and bike rides; Mountain Project works well for ticking climbs; Garmin works well for logging cardio and GPS. But none of them work particularly well together. It would be great to pull together multiple different activity streams into one location. This project is far too big for this class, but I'm planning on building something that uses both Mountain Project's API (to retrieve routes and "ticks" or completions of those routes) and my own scrape of MP's entire route database to build some features I wish they had. These include better data visualization of ticks, more structured data about climbs (eg type of climb - slab vs hand crack vs offwidth; pitch by pitch difficulty breakdown, etc), the ability to "follow" other users and more.

The current data is based on a scrape I did of Mountain Project where I recursively built a list of all areas and subareas on the site, then used the MP API to get basic data about all routes on the website. This selection of >250k routes has been filtered so only routes that have been ticked by profiles included in the site are included (this amount already slows down both the API and the Vue app).

## Pages summary
-   Home Page: shows a limited number of randomly selected "Featured Climbs" and some recent ticks (completions) of climbs
-   Routes: shows all routes in the database, which is a limited selection of the full scrape I did. I am using a lazy-load plugin to handle serving the images, all of which are served from the Mountain Project CDN.
-   route/id: shows a single route, along with all ticks of that route
-   Profiles: a preselected set of profiles of Mountain Project users (friends of mine, including some of whom I got to review this WIP). You can see which users the site is currently following, as well as follow/unfollow users from this overview page
-   profile/id: shows a single profile, along with all of that profile's ticks. You can follow/unfollow here
-   Feed: a feed of ticks of climbs for users the site is currently following

## SFC summary
-   ShowFeed: shows a feed of ticks. Used on Home, Route, and Feed
-   ShowProfile: shows a Mountain Project user profile. Used on Profile and Profiles
-   ShowRoute: displays a route page. Used on Route, Routes, and Home
-   ShowTick: displays a tick of a route. Used on Profile and ShowFeed
  
## Server interaction
-   Gets ticks, routes, profiles, follows, and ticks from the API. Areas are also currently retrived but not used
-   Allows site users to choose which profiles to follow/unfollow by posting to the API. Once I integrate user authentication, this functionality would be moved to a user account rather than being sitewide

## Outside resources
[Mountain Project](https://www.mountainproject.com/)
[Mountain Project API](https://www.mountainproject.com/data)

## Notes for instructor
Apologies for this being late. Bit off more than I could chew on this one. Getting the API stood up and ingesting this amount of data took some work, as did massaging the data into JSON for consumption. I did much of the data scraping earlier in the semester with the intention of using it for this project but still had to do some substantial cleanup work. Code for this is at [https://github.com/ColeDCrawford/mp-scrape](https://github.com/ColeDCrawford/mp-scrape) - this is currently public but it was and will be private after this is graded, don't want to run into copyright issues.