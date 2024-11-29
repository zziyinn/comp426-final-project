// Select DOM elements
const filterForm = document.getElementById("filter-form");
const exerciseList = document.getElementById("exercise-list");

// Add event listener to the form
filterForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get user inputs
    const muscleGroup = document.getElementById("muscle-group").value;
    const level = document.getElementById("level").value;

    // Construct the API URL
    const apiUrl = `http://localhost:8000/random-workout?muscleGroup=${encodeURIComponent(
        muscleGroup
    )}&level=${encodeURIComponent(level)}&num=5`;

    console.log("API URL:", apiUrl); // Debugging: Ensure apiUrl is correct

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch exercises");
        }

        const exercises = await response.json();

        // Clear the loading state
        exerciseList.innerHTML = "";

        // Display exercise results
        exercises.forEach((exercise) => {
            const exerciseItem = document.createElement("div");
            exerciseItem.className = "exercise-item";
            exerciseItem.innerHTML = `
                <h3>${exercise.Exercise}</h3>
                <p>Muscle Group: ${exercise.MuscleGroup}</p>
                <p>Level: ${exercise.Level}</p>
            `;
            exerciseList.appendChild(exerciseItem);
        });
    } catch (error) {
        // Handle errors gracefully
        console.error("Error fetching exercises:", error.message);
        exerciseList.innerHTML = `<p>Error loading exercises: ${error.message}</p>`;
    }
});
