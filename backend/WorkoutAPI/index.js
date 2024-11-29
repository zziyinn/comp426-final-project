const express = require("express");
const app = express();
const cors = require("cors"); // Import the CORS middleware
const port = 8000;
const exercises = require("./exercise-data.json");

app.use(cors()); // Enable CORS for all routes
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

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
