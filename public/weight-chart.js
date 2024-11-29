// const { type } = require("@testing-library/user-event/dist/type");

// Get DOM elements
const weightInput = document.getElementById('weight-input');
const addWeightBtn = document.getElementById('add-weight-btn');
const weightChartCtx = document.getElementById('weight-chart').getContext('2d');

let weightData = [];

// Load weight data from local storage
if (localStorage.getItem('weightData')) {
    weightData = JSON.parse(localStorage.getItem('weightData'));
}

// Add listener to add weight button
addWeightBtn.addEventListener('click', () => {
    const weight = parseFloat(weightInput.value);
    const date = new Date().toISOString().split('T')[0];

    if (isNaN(weight) || weight <= 0) {
        alert('Please enter a valid weight!');
        return;
    }

    saveWeightData(date, weight);
    updateWeightChart();
    weightInput.value = '';
});

// Save weight data to local storage
function saveWeightData(date, weight) {
    const existingEntryIndex = weightData.findIndex((entry) => entry.date === date);
    
    if (existingEntryIndex !== -1) {
        weightData[existingEntryIndex].weight = weight;
    } else {
        weightData.push({ date: date, weight: weight });
    }

    weightData.sort((a, b) => new Date(a.date) - new Date(b.date));
    localStorage.setItem('weightData', JSON.stringify(weightData));
}

// Initialize weight chart
let weightChart = new Chart(weightChartCtx, {
    type: 'line',
    data: {
        labels: weightData.map((entry) => entry.date),
        datasets: [{
            label: 'Weight (kg)',
            data: weightData.map((entry) => entry.weight),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            X: {
               title : {
                   display: true,
                   text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Weight (kg)'
                },
            }
        }
    } 
});

// Update weight chart
function updateWeightChart() {
    weightChart.data.labels = weightData.map((entry) => entry.date);
    weightChart.data.datasets[0].data = weightData.map((entry) => entry.weight);
    weightChart.update();
};

// Load weight data when the window loads
window.onload = function() {
    updateWeightChart();
    
    saveWeightData('2023-11-25', 70);
    updateWeightChart();

    saveWeightData('2023-12-31', 70.5);
    updateWeightChart();

    saveWeightData('2024-01-01', 69.5);
    updateWeightChart();

    saveWeightData('2024-02-05', 68.8);
    updateWeightChart();

    saveWeightData('2024-03-06', 67.1);
    updateWeightChart();

    saveWeightData('2024-04-12', 67.5);
    updateWeightChart();

    saveWeightData('2024-05-08', 65.9);
    updateWeightChart();

    saveWeightData('2024-06-07', 65.8);
    updateWeightChart();

    saveWeightData('2024-07-09', 65.5);
    updateWeightChart();

    saveWeightData('2024-08-15', 64.1);
    updateWeightChart();

    saveWeightData('2024-10-18', 61.5);
    updateWeightChart();

    saveWeightData('2024-11-20', 60);
    updateWeightChart(); 
};