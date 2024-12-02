const express = require("express");
const app = express();
const cors = require("cors"); // Import the CORS middleware
const port = 8000;
const exercises = require("./exercise-data.json");
const fs = require('fs');

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
// Define API endpoint
app.get("/random-workout", (req, res) => {
  const { muscleGroup, level, num } = req.query;

  // Validate query parameters
  if (!muscleGroup || !level || !num) {
    return res.status(400).send({ error: "Missing parameters" });
  }

  // Filter exercises based on query
  const filteredExercises = exercises["Exercise List"].filter(
    (exercise) =>
      exercise.MuscleGroup === muscleGroup && exercise.Level === level
  );

  // Limit the number of results
  const randomExercises = filteredExercises.slice(0, parseInt(num));
  res.json(randomExercises);
});

// Save weight data to local storage
function saveWeightData(user, date, weight) {

  let weightData = fs.readFileSync('weight-data.json', 'utf8');
  weightData = JSON.parse(weightData);
    
  const existingEntryIndex = weightData[user]['weightData'].findIndex((entry) => entry.date === date);
  
  if (existingEntryIndex !== -1) {
    weightData[user]['weightData'][existingEntryIndex].weight = weight;
  } else {
    weightData[user]['weightData'].push({ date: date, weight: weight });
  }

  weightData[user]['weightData'].sort((a, b) => new Date(a.date) - new Date(b.date));
  fs.writeFileSync('weight-data.json', JSON.stringify(weightData));
  return weightData;
}

// Store weight data after user logs their weight
app.post("/log-weight", (req, res) => {
  console.log(req.body);
  let userName = req.body.userName;
  let userWeight = req.body.weight;
  let date = req.body.date;

  console.log(userName);
  console.log(userWeight);
  console.log(date);

  if (isNaN(userWeight) || userWeight <= 0) {
    console.log(userWeight);
    res.status(400).send({ error: "Invalid weight" });
  } else {
    let weightData = saveWeightData(userName, date, userWeight);
    res.status(201).json(weightData[userName]["weightData"]);
  }
});

// Retrieve weight data from local storage
app.get("/log-weight", (req, res) => {
  const { userName } = req.query;
  console.log(userName);

  let weightData = fs.readFileSync('weight-data.json', 'utf8');
  weightData = JSON.parse(weightData);
  if (!weightData[userName]) {
    console.log("User not found");
    res.status(404).send({ error: "User not found" });
  } else {
    console.log("User found");
    res.status(201).json(weightData[userName]["weightData"]);
  }
});

// Check if user is new or existing
app.get("/user", (req, res) => {
  const { userName } = req.query;
  console.log(userName);

  let weightData = fs.readFileSync('weight-data.json', 'utf8');
  
  if (weightData === "") {
    weightData = {};
  } else {
    weightData = JSON.parse(weightData);
  }
  if (!weightData[userName]) {
    weightData[userName] = {'weightData': []};
    fs.writeFileSync('weight-data.json', JSON.stringify(weightData));
    res.status(201).json({ message: "New" });
  } else {
    res.status(201).json({ message: "Existing" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
