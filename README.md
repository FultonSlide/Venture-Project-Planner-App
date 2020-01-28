# Venture App

Venture is a project planner app that I built where I used React, Redux, Firebase Auth, Firebase Cloud Functions, Firebase Hosting & Firestore to create an application that allows users to sign up for an account, create planning posts, view other users posts & get real-time notifications of other users signing up and posting projects.

I used React to create all of the components from the Navbar component to the project details component. I then used Redux as my application state management tool to manage the state of my app from users being logged in or out to managing project detail data that was being pulled from my Firestore database on the backend.

As well as these technologies I leveraged Firebase Auth to create a secure sign up & login system using email/password, Firebase Cloud Functions to create a notification system where logged in users are notified of other users signing up for the first time or posting a new project & I utilized Firebase Hosting to host the final built application.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The live application can be found here https://venture-project-planner.web.app/.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
