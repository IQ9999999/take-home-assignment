# React Authentication App

This repository contains a simple React Authentication App which includes registration, login, and landing pages.

## Getting Started

Firstly, you'll need to install the necessary modules

```
npm install
```

## Run the App

To run the app, you can use the following command:

```
npm start
```

## Structure

The app is divided into four components:

- App.jsx: This is the main component that orchestrates the authentication functionality. It handles the state for the username, password, and current view.
- Register.jsx: This is the registration component. It takes a user's input for their username and password, and communicates with the App component to update the state.
- Login.jsx: This is the login component. It also takes a user's input for their username and password, but it uses them to log the user in, communicating with the App component to update the state.
- Landing.jsx: This is the landing page that a user sees when they are logged in.

## Running Tests

You can run the tests using the following command:

```
npm test
```
