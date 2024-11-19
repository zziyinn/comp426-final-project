// components/WeightTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function WeightTracker() {
  const [weight, setWeight] = useState('');
  const [weightData, setWeightData] = useState([]);

  useEffect(() => {
    axios.get('/api/weights')
      .then(response => setWeightData(response.data))
      .catch(error => console.error(error));
  }, []);

  const addWeight = () => {
    axios.post('/api/weights', { weight })
      .then(response => setWeightData([...weightData, response.data]))
      .catch(error => console.error(error));
    setWeight('');
  };

  const chartData = {
    labels: weightData.map(data => data.date),
    datasets: [{
      label: '体重变化',
      data: weightData.map(data => data.weight),
      borderColor: 'blue',
      fill: false,
    }]
  };

  return (
    <div>
      <h2>体重管理</h2>
      <input 
        type="number" 
        value={weight} 
        onChange={e => setWeight(e.target.value)} 
        placeholder="输入今日体重" 
      />
      <button onClick={addWeight}>记录体重</button>
      <Line data={chartData} />
    </div>
  );
}

export default WeightTracker;

