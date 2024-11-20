// src/components/WeightTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function WeightTracker() {
  const [weight, setWeight] = useState('');
  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    axios.get('/api/weights')
      .then(response => setWeightData(response.data))
      .catch(error => console.error('Error fetching weights:', error));
  }, []);

  const addWeight = () => {
    axios.post('/api/weights', { weight })
      .then(response => setWeightData([...weightData, response.data]))
      .catch(error => console.error('Error adding weight:', error));
    setWeight('');
  };

  const chartData = {
    labels: weightData.map(data => new Date(data.date).toLocaleDateString()),
    datasets: [{
      label: 'Weight Progress',
      data: weightData.map(data => data.weight),
      borderColor: 'blue',
      borderWidth: 2,
      fill: false
    }]
  };

  return (
    <section>
      <h2>Track Your Weight</h2>
      <div className="input-group">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter today's weight"
        />
        <button onClick={addWeight}>Log Weight</button>
      </div>
      <Line data={chartData} />
    </section>
  );
}

export default WeightTracker;
