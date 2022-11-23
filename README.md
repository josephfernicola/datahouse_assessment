# Project Description

This project is a backend express.js server that uses a scoring function in order to generate a compatability score for applicants. The server listens on port 5000 and handles post requests on the "/" endpoint. src/generateScores.js file is where the compatability scoring functionality is handled. The server will respond to the request with json data which contains the applicant names and all of their respective compatibility scores. Express middleware is implemented in order to handle json data parsing.

Npm and node.js are pre-requisites to run this project. The package.json file contains the required script.

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

Contains the functionality for generating a compatability score for each applicant and sending the data back. The compatability score is based on the team members and what their attribute scores are. All attributes for the team members are first divided by 10, which will return a number between 0-1. Ex: Intelligence is a 4 for a team member, so the createWeightedAttributes function would return 0.4. Then createAverageOfWeightedValues function creates the average attributes of all team members. Ex: 3 team members have intelligence scores of 4, 8, and 3. This would create an average of 0.5 after dividing each by 10. This average value is the amount that each score is weighted for the applicants to generate a compatability score. If the average for intelligence is 0.5, then generateScores function would multiply the intelligence rating of the applicant by 0.5. This is done for all applicant attributes. All attributes are added up and divided by 40 to ensure that a score never goes beyond 1.

**src/index.js**

Sets up the server. Sets up the POST route at "/" endpoint, implements the express middleware for parsing the json data and listens on port 5000.

# Using Postman to test POST request at "/" endpoint

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
            "score": 0.121
        },
        {
            "name": "Jane",
            "score": 0.165
        },
        {
            "name": "Joe",
            "score": 0.131
        }
    ]
}
```

## Postman test to ensure that a compatability score never goes above 1

```
{
    "team": [
        {
            "name": "Eddie",
            "attributes": {
                "intelligence": 10,
                "strength": 10,
                "endurance": 10,
                "spicyFoodTolerance": 10
            }
        },
        {
            "name": "Will",
            "attributes": {
                "intelligence": 10,
                "strength": 10,
                "endurance": 10,
                "spicyFoodTolerance": 10
            }
        },
        {
            "name": "Mike",
            "attributes": {
                "intelligence": 10,
                "strength": 10,
                "endurance": 10,
                "spicyFoodTolerance": 10
            }
        }
    ],
    "applicants": [
        {
            "name": "John",
            "attributes": {
                "intelligence": 10,
                "strength": 10,
                "endurance": 10,
                "spicyFoodTolerance": 10
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
            "score": 1
        },
        {
            "name": "Jane",
            "score": 0.4
        },
        {
            "name": "Joe",
            "score": 0.325
        }
    ]
}
```
