# Kentucky-Boulderer
## My Code Louisville FSJS Project

My project is an application to help my friends and I record all of the bouldering that we do in Kentucky, as well as make the information public and accessible to anyone interested in bouldering here. My application presents all of the data from the database in a navigation tree that represents a nested JSON object.
**You have to click on the plus button to reveal an object's children.**
I was going to include dynamic pages for each object in the tree but I ran out of time.

If you're not familiar with bouldering, it's essentially a sub-discipline of rock climbing in which you climb smaller boulders instead of towering cliffs.

If you have like 10 minutes, here is a link to a really [cool bouldering montage video.](https://vimeo.com/38586136)

I had some lofty goals for my project and I think that in the next few weeks, I'll still be trying to achieve them. There are so many features I still want to include but I had to complete my graduation requirements in time before I could pursue developing those. My project, unfortunately, only does the bare minimum. It only writes to and reads the database... for now.

## Important Info and Known Bugs
#### Known Bugs
##### *The Refresh Bug*
There is some very fragile code in my angular application that uses nested forEach() loops to scaffold my data. Occasionally the data will fail to load and nothing with appear inside all, or some, of the following elements...
- The navigation tree
- Any of the select menu drop downs

If you refresh the page, it should work okay. If it doesn't work again, refresh again. You can see why I called it the *Refresh Bug* I decided to use this method because I couldn't figure out how to use Angular promises or Mongoose promises in time for my project to make the due date so I just rolled with the punches.


#### Info
My project has a very STRICT object hierarchy. Which goes as follows...

Bouldering Area > Individual Boulders > Boulder Problems

My application can submit an object at any level in the tree but all of its parent objects **HAVE TO EXIST.**

There are two Bouldering Areas already seeded in the database, but there are **no seeded Individual Boulders or Boulder Problems.** In order to create a Boulder Problem, you first have to create an Individual Boulder, which then allows a Boulder Problem to be created.

## Instructions to Run
- Go to root directory of the project (Kentucky-Boulderer)
- Run ‘npm install’ to install necessary packages
- Run ‘mongod’ to start mongo service
- Run ‘node src/app.js’ while in the route of Kentucky-Boulderer to begin the app server process
- Open a localhost window to port 3000.
