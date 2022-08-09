# React and Node App example

The prupose of this application is to create a simple fullstack sample app that can be used as a template

## Stack

- **React**: JS library used to renderize the front-end application
- **Node**: JS interpreter to execute JS applications in a server
- **Typescript**: JS based language used, in this case, to develop the backend application
- **Mongo DB**: Flexible database server based on JS objects
- **Docker**: Containers service used to run applications under the same conditions regardless of the developer/deployment environment

## What it includes

- Login Page
- Item List Page
- Item View Page
- 404 page

## Folders Structure

### Backend

The folders system tries to apply a clean architecture. To do so we have the framework deacoplated from our modules. It should allow to us to be able to extend or add new modules easly, or even move the modules to another service and it should still working.

Each module has its own Application, Domain and Infrastructure folders.

- **Domain**: It defines our Application and how to implement classes from other layers. It cannot use Application or Infrastructure resources.
- **Application**: We add here the entrypoints to our system, als called use cases (create user, update user, etc). Here we define the module will be able to do. It cannot use Infrastructure resources.
- **Infrastructure**: It contains the implementation of the domain layer. For example, if the domain layer has a DatabaseInterface, it will be implemented as MongoDatabase or MySqlDatabase. Also on this layer we will use external dependencies like third-part packages.

```
root
|
|- src
    |-App   //Express related logic
    | |- Controllers    // Handle the requests and its responses
    | |- Errors         // Bakend errors handler
    | |- Middlewares    // validation middlewares
    | |- Providers      // Inject dependencies
    | |- Routes         // routes
    | |- bootstrap.ts   // Entry point to the APP
    | |- Server.ts      // Express server APP
    |
    |- Context              // Different APP modules
        |- <<Module>>       // Module related logic
          |- Application    // Uses cases of the module (entrypoints)
          |- Domain         // Define the business logic
          |- Infrastructure // Implements the domain layer
```

### FrontEnd

The folders structure used is quite similar to the React/Vue frameworks (NextJs or NuxtJs).

```
root
|
|- src
    |-components   // include the components used in pages
    |-hooks        // custom hooks
    |-middlewares // auth components that work as middlewares
    |-pages       // Page components that instantiate other components
    |-services    // Include services to get data to outside of the application
    |-store       // include the actions and reducers (slices) to handle the state
    |-styles      // SASS files
    |-App.js      // application entry point
    |-index.js    // instances the application
```

## Auth Work Flow

The Auth is handled by the framework layer. It uses **cookies**, **sessions** and **JWT** to make the login process.

1. **Login** When a user logs in, the Backend generates a **session** with a **JWT**. The JWT is a token with some user data that gets signed. That token is shared with the browser using a cookie.
2. **Mantain user logged**: When user is logged, the user data is stored on the app state, so user could navegate for different pages.
3. **Mantain user logged on reload**: When user reloads the page, the browser makes a request to the server with the cookie. The server checks that the JWT is valid and returns the user data. That data is stored on the state by the browser.

## Commands

- `make dev-up`: Initializes docker containers in dev mode. It can take for a long the first time. You can check the application here `http://localhost:3001/`
- `make dev-down`: Stops the container
- `make client-dev-logs`: Show the React logs
- `make server-dev-logs`: Show the Node logs
- `make client-dev-sh`: Execute commands to client's container
- `make server-dev-sh`: Execute commands to server's container

## FAQs

Here are some questions and answers about why I made some decisions

- **Why I use Typescript**
  - I decided to use TS because it allows to me using the JS functionalities plus interfaces and types. It will make the application easier to mantain or take future desitions like moving from Mongo DB to another DB like MySQL. Another thing that I like from TS is that I can encapsulate Interfaces in a package and share it between the backend and the frontend applications, so we can be sure that both applications will "speak the same language" when they are interacting using HTTP requests and responses.
- **Why I use Mongo DB?**
  - I use Mongo on small applications because it's easy to be implemented. In case we want to move to another DB engine it should be easy since we are implementing an agnostic DB interface.
- **Why I use uuid instead of DB provided ID?**
  - I use a library to generate uuid to deacoplate our bussiness logic from the infrastructure. Our application will use the same ID format even if we decide to change the DB engine.

## Used Dependencies

- Backend:
  - **node-ts-dev**: It executes the TS code without compiling it to JS using the Node API. It's used to develop TS applications using hotreload fastest than compiling to JS and restarting the Node server each time that a change is made.
  - **body-parser**: Parses received requests in JSONs
  - **supertest**: Testing library to make requests to the API
  - **http-status**: JS library to use consistent http status codes
  - **jest**: JS library to make tests
  - **ts-jest**: TS library to perform jest tests on Typescript
  - **glob**: Match files using the pattern. Used to register routes automatically using a pattern.
  - **uuid**: Library to create unique id
  - **mongodb**: mongo db client
  - **cookie-session**: Store session on cookie
  - **jsonwebtoken**: Use jwt to sign data sotred on the session
  - **express-async-errors**: Allows to handle errors executed from async functions
  - **rickmortyapi** Http Client to make requests to the api
- Front end
  - **react-router-dom**: library to handle routes
  - **sass**: transpiller from SASS to CSS
  - **axios**: Library to make requests from the client side
  - **reduxjs/toolkit** and **react-redux**: JS libraries to handle the state

## Nice to have

There is a list of future features to be implemented.

- Using Env files (now using container env vars)
- Dependency Container (Now using hand made providers)
- Logger
- Routes validation
- XSS middleware
- CSRF token on forms
- Backend tests
- Frontend tests
- Use TS on the frontend

## Observations

You may notice than extended errors are using the following code at the constructor:

```
class FooError extends Error {
    constructor(m: string) {
        super(m);

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, FooError.prototype);
    }
}
```

It's a workaround made to allow to extend the Error class https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
