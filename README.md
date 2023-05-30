# Project 3 - CETAMD
## the chronological event time and management device 
## Rawle Becerril, Caleb Hart, Jean Brigonnet, Gabriel Royce
 

 ### Goal: Create a full-stack, MERN App for artists/performers to track their upcoming gigs/performances

 #### Backend/API Technology used:
 - Javascript
 - Express
 - NodeJS & Nodemon
 - MongoDB/Mongoose
 - CRUD functionality
 - Deployed on Render.com

 ### Daily Plan

| Day | Goal |
|-----|------|
| 1 | Set Up Basic Running front end and back end repos |
| 2 | Render data to screen |
| 3 | Create all forms |
| 4 | Bug testing, add possible stretch goals |
| 5 | Website Styling / Responsive |
| 6 | Final debugging and styling |
| 7 | Presentation Day |

#### Models
![model image](https://i.imgur.com/JamNqsp.png)

#### Routes
##### Base route - https://cetamdapi.onrender.com/gigs 
| Endpoint | Method | Description |
|----------|--------|-------------|
| router.get('/') | GET | returns all gigs |
| router.get('/:id') | GET | returns a single gig|
| router.post('/')| POST | creates a new gig|
| router.put('/:id')| PUT | updates a specific gig |
| router.delete('/:id') | DELETE | deletes a specific gig |


 #### User Stories
 - As a user, I should be able to create, read, update, and delete upcoming and past gigs
 - As a user, I should be able to display detailed information about each individual gig
 - As a user, I should be able to organize my gigs by upcoming date in chronological order
 - Bonus: As a user, I should be able to see a Google Maps location readout of where the gig is taking place
 - Bonus: As a user, I should be able to view all past gigs after their completion/event date

 