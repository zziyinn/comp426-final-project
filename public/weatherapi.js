const WEATHER_API_KEY = 'f8c7a64b80ff4734b15221030242410';  
const city = 'Chapel Hill';  
const WEATHER_API_URL = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`;

async function displayWeather() {
    try {
        const response = await fetch(WEATHER_API_URL);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error ? data.error.message : "API request failed");
        }

        const weatherInfo = document.getElementById('weather-info');
        const temp = data.current.temp_c;
        const description = data.current.condition.text;
        const icon = data.current.condition.icon;

        weatherInfo.innerHTML = `
            <p class="location">${data.location.name}</p>
            <p class="temp">${temp}°C</p>
            <p class="description">${description}</p>
            <img src="https:${icon}" alt="Weather Icon">
        `;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = '<p>Unable to load weather</p>';
    }
}

displayWeather();