// scripts.js

// Replace with your actual API keys
const WEATHER_API_KEY = 'YOUR_WEATHER_API_KEY'; // OpenWeatherMap API key
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${WEATHER_API_KEY}&units=metric`;

const NASA_API_URL = 'https://api.nasa.gov/planetary/apod?api_key=YOUR_NASA_API_KEY'; // NASA API key

const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Any';

// Function to fetch weather information
function fetchWeather() {
    fetch(WEATHER_API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const description = `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
            document.getElementById('weather-description').textContent = description;
        })
        .catch(error => {
            document.getElementById('weather-description').textContent = 'Error fetching weather data';
            console.error('Weather API Error:', error);
        });
}

// Function to fetch the astronomy picture of the day
function fetchAstronomyPicture() {
    fetch(NASA_API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('astro-image').src = data.url;
            document.getElementById('astro-description').textContent = data.explanation;
        })
        .catch(error => {
            document.getElementById('astro-description').textContent = 'Error fetching astronomy picture';
            console.error('NASA API Error:', error);
        });
}

// Function to fetch a random joke
function fetchJoke() {
    fetch(JOKE_API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let joke;
            if (data.type === 'single') {
                joke = data.joke;
            } else {
                joke = `${data.setup} - ${data.delivery}`;
            }
            document.getElementById('joke-text').textContent = joke;
        })
        .catch(error => {
            document.getElementById('joke-text').textContent = 'Error fetching joke';
            console.error('Joke API Error:', error);
        });
}

// Call functions to fetch data
fetchWeather();
fetchAstronomyPicture();
fetchJoke();
