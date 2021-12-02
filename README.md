# PlayerTradeCard

User can add player card information and the card to the trading card to the list. Which shows total number of points
-- HTML & SCSS
Using Html and Scss with help of basic styling from bootsrap cdn to make UI presentable.
Using Input output and selector to comunicate between components , using reactive form with validation
-- NgRx State Mangment (Actions , Reducers , Selectors, Store)
In this application, using NgRx and Service for state managmnet (No API CALLS).
I've have also created place holder service for making api calls and triger the action from service.
-- API
Using JSON-server to host the api (but yet not using the api calls in this application)
-- Unit Test
Using jest with karma that comes in build with angular to write unit tests
on services , store , reducers , selectors and components with almost 80% code coverage
-- E2E Test
I am using cypress to demonstarte e2e automation
-- Git Hub Actions
Runing CI/CD pipeline on push and PR workflow

# Frame Works used

Angular , Rxjs , NgRx , Json-server , CI/CD , Jest , Cypress , Github Actions

## Development server

Run npm run client:run.
Navigate to `http://localhost:4200/`.

## Development of Api using Json-Server

Run npm run server:run

## Running end-to-end tests With Cypress

Run npm run cypress:open

## Unit Test Code Coverage

Run npm run test:ci

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
