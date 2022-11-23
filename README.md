# Project Description

This project is a backend express.js server that uses a scoring function in order to generate a compatability score for applicants. The server listens on port 5000 and handles post requests on the "/" endpoint. src/generateScores.js file is where the compatability scoring functionality is handled. The server will respond to the request with json data which contains the applicant names and all of their respective compatibility scores. Express middleware is implemented in order to handle json data parsing.

Npm and node.js are pre-requisites to run this project. The package.json file contains all of the required scripts.

# How to run

**Enter all commands in the home directory in order to run this project. Dependencies need to be installed first before running the project. Install dependencies by performing the following below:**

```
npm install
```

**Then in order to run the server, perform:**

```
npm start
```

# File Description

**src/generateScores.js**

Contains the functionality for generating a compatability score for each applicant and sending the data back.

**src/index.js**

Sets up the server. Sets up the POST route at "/" endpoint, implements the express middleware for parsing the json data and listens on port 5000.
