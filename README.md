# Red-Orchid

## User Story
As a logged in user, I want to be able to keep track of my monthly menstrual cycle with a date picker prompt and the typical situations associated with it. The user should be able to keep track of their days, flow density and symptoms. 

As a logged in user, I want to be able to post, delete and retrieve my daily notes on my dashboard.

As a logged in user, I can also post comments on other posts for any supportive recommendations or helpful tips.

## Acceptance Criteria
The /homepage route renders the user profile/dashboard of the current month that displays marked days where you can input your mood/cravings/flow.
The /signin route renders an option to sign in or sign up to see, edit or post.
An Apollo Server is set up to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
A 404 page Not Found is rendered if the user tries to access a page that doesn’t exist.


## Installation 
npm i

## Usage
Clone the repo, navigate to the root folder, run the following command in your terminal:
npm run seed and npm run develop

## Contributors
Jennifer Lee, Jamie Chu, Elmira Tashvighi, Annie Nguyen 

## Deployed Link and Screenshots
https://red-orchid.herokuapp.com/
https://github.com/JLee3883/red-orchid

![LoginPage](client/src/images/login.png)
![Register](client/src/images/register.png)
![CreatePost](client/src/images/create.png)
![SeePosts](client/src/images/posts.png)
![Calendar](client/src/images/calendar.png)


## Technologies Used 
React, CSS, JS, GitHub, Trello, Bootstrap 

## Questions
 If you have any questions regarding this app, please contact us directly at: 
 Annie --- anguyen.aln@gmail.com
 Jamie --- jamie.rose.528@gmail.com
 Jennifer --- thishereisjenn@gmail.com
 Elmira --- elmira.tashvighi@gmail.com