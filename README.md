# Interview Scheduler

## About this project

Using the latest tools and techniques, I built and tested a React application that allows users to book and cancel interviews.  
This app combines a concise API with a WebSocket server to build a realtime experience.

## Technical Specifications

React
Webpack, Babel
Axios, WebSockets
Axios
Storybook, Webpack Dev Server, Jest, Testing Library

The Scheduler client application was created using Create React App. 
Express is the basis for the Scheduler API server application.
Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
