# Gumroad Coding Question

This is a submission by [Aditya Karad](https://twitter.com/itsKarad) for this [coding challenge](https://www.notion.so/Coding-challenge-f7aa85150edd41eeb3537aae4632619f).

## Live Demo
https://gumroad-challenge-karad.web.app

## Some notes

- My commit history for this project is readable and incremental.
- **Big architectural decisions**:
   1. Choosing to build the app with React from the beginning: Converting code from Vanilla JS to React to pretty tiring in my opinion.
   2. Choosing NPM package like SocketIO instead of Firebase Realtime Database. Former is better suited for me because I am not familiar working with Firebase. I was also not familiar with SocketIO, but it was easier to learn due to my familiarity with NodeJS.
- **Something I would do different next time around:** focus on making it pretty later and first build out the features.

Things I did not know before starting this project:

- I have never worked with [socket.io](http://socket.io) before. I watched a few tutorials online to understand what it does and wrote a simple version to fulfill the feature mentioned (realtime updates to ratings).
- I have also never made something from a Figma file before, due to which styling may seem inaccurate.

## Tech Stack

### Backend

- NodeJS
- MongoDB as database
- [Socket.io](http://Socket.io) for realtime updates to frontend

### Frontend

- React: Create-React-App used
- Plain CSS.

### Deployment

- Firebase hosting for front-end single page react app.
- Heroku deployment for backend.
