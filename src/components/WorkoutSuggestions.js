import React, { useState, useEffect } from 'react';
import { getWorkouts } from '../api/workoutApi';

const WorkoutSuggestions = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      setLoading(true);
      try {
        const data = await getWorkouts('biceps'); // Replace 'biceps' with dynamic input
        setWorkouts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Workout Suggestions</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <h3>{workout.name}</h3>
            <p>{workout.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutSuggestions;
