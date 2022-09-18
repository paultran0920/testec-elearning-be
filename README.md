# Testec Interview Homework Backend

## Application Architecture

## Purpose
The purpose of this Back End project is to create a simplest user CRUD at backend side, which will be comsumed at the Front End

The backend including the following parts:

1. Database: in this project, I will use the Postgres
2. Programing language used to implement the Backend is NodeJS with the Nest framework with an awesome built-in support for the IoC, ORM, Midleware, ...
3. Project structure
* `scripts`: some sql script to initialize the data
* `src/auth`: the authentication implementation, you need to `/auth/login` with a username and password to have an access token
* `src/users`: provide needed API for for the client

## Pre-start
Please create a new `.env` including the following parameters
```sh
DB_URL="<Postgres DB URL>"
DB_PORT=The DB port (integer value)
USER_NAME="User name to login in to DB"
PASSWORD="password"
DATABASE="working on which database"

DEFAULT_PASSWORD="Default pass when creating a new user"

PORT=80 # Backend server running port, should be 80

```

## Run it
After doing needed configuration, you can start it by

1. Checkout this project to your machine
2. Run `npm install` from the Root folder to install needed npm packages
3. Run `npm build` to build this project then deploy it where you want. The final build resource can be found in folder `dist`, the entry point is `main.js`
4. Run `npm run start` to start the application if you want to run this application from the source

## DEMO


## Can do more if have enough time
1. Unit Test and Code coverage
2. Integration Test
3. Have better error handling
4. Integrate CI process with CircleCI
5. Build the docker image and have a better flow to deploy on AWS 

