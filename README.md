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

# POST Request Example using REST API

**Example post request was done with Postman for testing the server**

**_Body_**

```
{
    "team": [
        {
            "name": "Eddie",
            "attributes": {
                "intelligence": 1,
                "strength": 5,
                "endurance": 3,
                "spicyFoodTolerance": 1
            }
        },
        {
            "name": "Will",
            "attributes": {
                "intelligence": 9,
                "strength": 4,
                "endurance": 1,
                "spicyFoodTolerance": 6
            }
        },
        {
            "name": "Mike",
            "attributes": {
                "intelligence": 3,
                "strength": 2,
                "endurance": 9,
                "spicyFoodTolerance": 5
            }
        }
    ],
    "applicants": [
        {
            "name": "John",
            "attributes": {
                "intelligence": 4,
                "strength": 5,
                "endurance": 2,
                "spicyFoodTolerance": 1
            }
        },
        {
            "name": "Jane",
            "attributes": {
                "intelligence": 7,
                "strength": 4,
                "endurance": 3,
                "spicyFoodTolerance": 2
            }
        },
        {
            "name": "Joe",
            "attributes": {
                "intelligence": 1,
                "strength": 1,
                "endurance": 1,
                "spicyFoodTolerance": 10
            }
        }
    ]
}
```

**_Expected Response_**

```
{
    "scoresForAllApplicants": [
        {
            "name": "John",
            "score": 0.325
        },
        {
            "name": "Jane",
            "score": 0.375
        },
        {
            "name": "Joe",
            "score": 0.2125
        }
    ]
}
```