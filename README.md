# React and Node App example

The pupose of this application is to create a simple fullstack sampe app that can be used as a template

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

## FAQs

Here are some questions and answers about why I made some decisions

- **Why I use Typescript**
  - I decided to use TS because it allows to me using the JS functionalities plus interfaces and types. It will make the application easier to mantain or take future desitions like moving from Mongo DB to another DB like MySQL. Another thing that I like from TS is that I can encapsulate Interfaces in a package and share it between the backend and the frontend applications, so we can be sure that both applications will "speak the same language" when they are interacting using HTTP requests and responses.
- **Why I use Mongo DB?**
  - I use Mongo on small applications because it's easy to be implemented. In case we want to move to another DB engine it should be easy since we are implementing an agnostic DB interface.

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

## Nice to have

There is a list of future features to be implemented.

- Using Env files
- Dependency Container
- Logger

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
