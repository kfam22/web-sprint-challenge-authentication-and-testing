# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [ ] Run `npm install` to install your dependencies.
- [ ] Build your database executing `npm run migrate`.
- [ ] Run tests locally executing `npm test`.

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [X] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [X] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [X] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.
-Sessions are a way to persist data across many requests.  They create a session 
id which is stored on a cooke that is sent back and forth with each request in 
the request header and used to verify the user. Cookies are automatically sent 
with each request, they are separate from the API server and can automatically
remove old session data.  Some disadvantages ar that they are small in size,
they could be hacked, and it's hard to reset the cache without losing all
session data.

-JSON Web Tokens (JWT) have a token based application and the server creates
JWT with a secret then sends it to the client where it is then stored in local
storage.  After it's in local storage, the token includes a header with each
request. With tokens, user's state is stored in the token on the client side
rather than on the server side.  JWT is better for scalability and often used
for authentication.

2. What does `bcryptjs` do to help us store passwords in a secure manner?
-Bcryptjs provides key derivation or hashing functions.  It also implements
salting and accumulative hashing rounds to ensure that passwords are protected
against hackers.

3. How are unit tests different from integration and end-to-end testing?
-Unit tests test individual unit behavior and functionality, often just 
one function/method at a time.  There are often many unit tests which are 
fast and meant to be run often to avoid bugs at the base level

-Integration tests test how different parts of the system work together.
Integration testing is used for endpoints .

-End to end tests are used to test data access.  They test the entire 
program and tend to be slower and take more time because they perform
operations and run queries against an actual database like the one used
for production.

4. How does _Test Driven Development_ change the way we write applications and tests?
Test driven development saves time, energy and money by helping developers 
catch bugs early on and easily get to the root of any problem. It encourages
developers to write modular code that has the purpose completing a specific task.
