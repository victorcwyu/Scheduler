# Interview Scheduler

## About this project

Using the latest tools and techniques, I built and tested a React application that allows users to book and cancel interviews.  
This app combines a concise API with a WebSocket server to build a realtime experience.

The Scheduler client application was created using Create React App. 
Express is the basis for the Scheduler API server application.
Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Screenshot Preview

!["Screenshot of scheduler application"](https://github.com/victorcwyu/scheduler/blob/master/docs/scheduler-preview.png?raw=true)

## Dependencies

- axios: 0.18.1
- classnames: 2.2.6
- normalize.css: 8.0.1
- react: 16.9.0,
- react-dom: 16.9.0
- react-scripts: 3.0.0
- @babel/core: 7.4.3
- @storybook/addon-actions: 5.0.10
- @storybook/addon-backgrounds: 5.0.10
- @storybook/addon-links: 5.0.10
- @storybook/addons: 5.0.10
- @storybook/react: 5.0.10
- @testing-library/jest-dom: 4.0.0
- @testing-library/react: 8.0.7
- @testing-library/react-hooks: 3.2.1
- babel-loader: 8.0.5
- eslint-plugin-react: 7.19.0
- node-sass: 4.11.0
- prop-types: 15.7.2
- react-test-renderer: 16.13.1

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
