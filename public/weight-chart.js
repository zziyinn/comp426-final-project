// Get DOM elements
const weightInput = document.getElementById('weight-input');
const addWeightBtn = document.getElementById('add-weight-btn');
const weightChartCtx = document.getElementById('weight-chart').getContext('2d');

const currentUser = sessionStorage.getItem('currentUser');

let date = new Date();
let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-";
if (date.getDate() < 10) {
    currentDate += "0" + date.getDate();
} else {
    currentDate += date.getDate();
}

let dateInput = document.getElementById("date-input");
dateInput.setAttribute("max", currentDate);

// Add listener to add weight button
addWeightBtn.addEventListener('click', async () => {
    const weight = parseFloat(weightInput.value);
    const selectDate = dateInput.value;


    const apiURL = 'http://localhost:8000/log-weight';
    let fetchResult = await fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify({userName: currentUser, weight: weight, date: selectDate}),
        headers: {
            'Content-Type': 'application/json'
          },
    });
    if (!fetchResult.ok) {
        alert('Please enter a valid weight!');
        // throw new Error('Failed to fetch exercises');
        return;
    }
    let weightData = await fetchResult.json();

    updateWeightChart(weightData);
    weightInput.value = '';
});

// Initialize weight chart
let initialData = []
let weightChart = new Chart(weightChartCtx, {
    type: 'line',
    data: {
        labels: initialData.map((entry) => entry.date),
        datasets: [{
            label: 'Weight (kg)',
            data: initialData.map((entry) => entry.weight),
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
function updateWeightChart(weightData) {
    weightChart.data.labels = weightData.map((entry) => entry.date);
    weightChart.data.datasets[0].data = weightData.map((entry) => entry.weight);
    weightChart.update();
};

// Load weight data when the window loads
window.onload = async function() {
    const apiURL = 'http://localhost:8000/log-weight?userName=' + currentUser;
    const fetchResult = await fetch(apiURL);
    let weightData = await fetchResult.json();
    console.log(weightData);
    updateWeightChart(weightData);
};