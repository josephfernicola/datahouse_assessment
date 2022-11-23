import express from "express";
import { scoreAllApplicants } from "./generateScores.js";

//Set up express server at PORT 4000
const app = express();
const PORT = 5000;

//To parse JSON data
app.use(express.json());

//Endpoint for handling requests
app.post("/", (req, res) => {
  const jsonData = req.body;
  if (!jsonData["applicants"]) {
    res.status(400).send("No applicants in request");
  }

  //input check to ensure request is an object
  if (typeof jsonData !== "object") {
    res.status(400).send("Bad request");
  }
  //input check to ensure request contains all necessary attributes
  jsonData["applicants"].forEach((applicant) => {
    if (
      !("intelligence" in applicant.attributes) ||
      !("endurance" in applicant.attributes) ||
      !("strength" in applicant.attributes) ||
      !("spicyFoodTolerance" in applicant.attributes)
    ) {
      res.status(400).send("Request is missing applicant attributes");
    }

    //input check to ensure request has exact amount of attributes
    if (Object.keys(applicant.attributes).length !== 4) {
      res.status(400).send("Invalid amount of applicant attributes");
    }
  });

  const namesAndScores = scoreAllApplicants(jsonData);
  res.send(JSON.stringify(namesAndScores));
});

// Run the server
app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
