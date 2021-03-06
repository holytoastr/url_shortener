# Cryptly
Url shortener for the [recently deceased](http://vignette3.wikia.nocookie.net/beetlejuice/images/c/cc/HandbookForTheRecentlyDeceased.jpg/revision/latest?cb=20110929030416).

## Technical Details
* Uses Express to handle HTTP requests and serve API endpoints.
* Uses MongoDB as our database
* Uses Mongoose as our ORM

## Goals
### Bronze
+ View a form on the main page
+ Input a long url into the form
+ Create a short(er) url
+ Add long url to the database

### Silver
+ Redirect user to long url when using short url
- Add angular to application stack to handle routing

### Gold
- Add users that can see all their urls

## User Stories
- A user arrives on our main page and can see a form to input their url (bronze)
- A user can input their long url into the form and generate a shorter url (bronze)
- A user can use the shorter url to redirect to the long url (silver)
- A user can see all the short urls they've generated and the long forms (gold)

## Challenges
- Determining who would work on which part of the project. Solution: Jeff/Melissa paired on Express set up, Isaac worked on db set up, and Maureen on public and views set up. When domains crossed, we would pair to connect our pieces together. (Example: Jeff/Isaac connecting the db to express)
- Testing while portions unfinished. Solution: Dummy data.
- Connecting the database. Solution: Pairing. Group effort.
- Generating short url to insert into database. Solution: Hidden form field where short url is generated.

## Unsolved issues
- Get short url to display AFTER submit

## Initial Planning
### Wireframe
![Wireframe](https://www.dropbox.com/s/t9mt7b9cunmxb56/cryptlywireframe.jpg?raw=1)

### Data Models
| url |
|-----|
| long_url |
| short_url |
