<!-- @format -->

# Bizcuit

## Installation

Install [Node](https://nodejs.org/en/)
Install [Vite](https://vitejs.dev/guide/)

## Usage

After installation of node, clone the repository and run the following commands in terminal

    - cd bizcuit-todo-application/backend && npm install
    - cd bizcuit-todo-application/frontend && yarn

## Run Server

Run the following commands to run server

- npm run start:dev
  - Node - http://localhost:3000

## Run Frontend

Run the following commands to run react application

- yarn run dev
  - Node - http://127.0.0.1:5173

## Test

Run the following commands to run test cases

- npm test

## API

The documentation of the APIs can be found here: http://localhost:3000/api

## Video 
- Here is a short link to the video on how it works.
- https://drive.google.com/file/d/157v_K76djFT6Xb1naN1yMEc9NDcJzB7Y/view

## Improvements on what else can be done in the application

- Pagination: Since there can be more todo's for a single user, we can implement pagination.
- Search &  Sort - We can search or sort a list by name.
- Deadline - Create a cron job to mark the todo as finished on the basis of comparison on today's date and todo deadline date.
- Hosting - The application can be hosted on the AWS server by using different services
    - AWS (EC2, ECS, AWS Lambda)
- A CI/CD pipeline can also be established via gitlab and AWS
- Database Performance can be increased by implementing read replicas on the RDS side.
- React performance can be increased by using cloudFront
- Server side performance can be increased by using more than one methods like cache strategy, use Graphql APIs with Apollo Client e.t.c.
- Can store logs to keep track of the activities.

## Functional

- Login and Signup
    -- User can register himself on the signup page. Please note that an activation email is not being sent, any user can come up and register to the platform.
    -- After Signup, user can login himself by providing correct details of himself. After which he will be able to access the dashboard.
- Create Todo
    -- The loggedIn user can create todo for himself, delet the todo, and also mark the todo as completed.
- Get Active Todo list per user
   -- Show active todo list on the dashboard
- Get Completed Todo list per user
    -- Show todo list that has been marked as completed.
- Database import won't be necessary, the server will automatically synchronize the tables.
- I have used ESLinters to keep the code clean.

## Could not finish
- I could not finish the deadline functionality of the Todo in time.
- I wanted to write unit test cases in more depth and detail.
- Implement PWA functionality

## Code Format & Linters used

     - EsLint
     - Prettier

## Tools and Technologies

    - Node ^16.18
    - Express
    - TypeScript
    - NestJs
    - JWT Token Authentication
    - Vite with ReactJs
    - MySql using typeOrm
    - Swagger
    - Jest
    - Prettier
    - ESLint
