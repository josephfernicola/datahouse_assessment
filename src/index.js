import express from "express";
import { scoreAllApplicants } from "./generateScores.js";

//Set up express server at PORT 4000
const app = express();
const PORT = 5000;

//To parse JSON data
app.use(express.json());

//Endpoint for handling requests
app.post("/", (req, res) => {
  const jsonApplicantData = req.body;
  const namesAndScores = scoreAllApplicants(jsonApplicantData);
  res.send(JSON.stringify(namesAndScores));
});

// Run the server
app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
