# Virtual travel agency

[Project](/4-naturous/) is in a tour booking site. Consists of API with Server Side rendered web page which is live at own hosted VPS. 

Available here: [natours.bieda.it](https://natours.bieda.it/)

Take a look at [Postman API docs](https://documenter.getpostman.com/view/19887252/2s935vn19F) to get more understanding.

## Technologies Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code on the server-side.
- Express: A web application framework for Node.js that provides a set of features for building web applications and APIs.
- MongoDB: A NoSQL document-oriented database used for storing and retrieving data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB that provides a higher-level interface for managing data.
- Docker: A containerization platform used to deploy applications in a consistent and reproducible way.
- Docker Compose: A tool for defining and running multi-container Docker applications.
- VPS Linux Server: A virtual private server (VPS) running a Linux operating system used for hosting and deploying the application.
- Mailtrap: An email testing service used for testing email functionality in the application.
- Sendgrid: A cloud-based email service used for sending transactional emails from the application.
- Pug: A template engine for Node.js used for rendering views and HTML.

## Features Implemented

- Stripe Integration: Stripe integration is implemented for processing online payments for tours. It allows users to pay for tours using their credit or debit cards securely.
- CORS: Cross-Origin Resource Sharing (CORS) is a security feature that allows resources on a web page to be requested from another domain outside the domain from which the first resource was served.
- CSP: Content Security Policy (CSP) is a security feature that helps prevent cross-site scripting (XSS) attacks by allowing web developers to specify which sources of content are trusted.
- JWT: JSON Web Tokens (JWT) is a standard for securely transmitting information between parties as a JSON object. It is used for authentication and authorization purposes in the application.
- Body Parsers: Body Parsers are used to parse the request body data in order to extract and work with the data in the application.
- Rate Limiting: Rate limiting is a feature that limits the number of requests that can be made to the application in order to prevent abuse and improve security.

### Acknowledgement

This repo is part of the online course I've taken at Udemy. Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2023](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)
