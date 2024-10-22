// Fetch Random Dog Image
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        const dogContainer = document.getElementById('dog-container');
        dogContainer.innerHTML = `<img src="${data.message}" alt="Random Dog" width="300">`;
      })
      .catch(error => console.error('Error fetching dog image:', error));
  }
  
  // Fetch Random Joke
  function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        const jokeContainer = document.getElementById('joke-container');
        jokeContainer.innerHTML = `<p>${data.setup} - ${data.punchline}</p>`;
      })
      .catch(error => console.error('Error fetching joke:', error));
  }
  
  // Fetch Weather Info
  function fetchWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true')
      .then(response => response.json())
      .then(data => {
        const weather = data.current_weather;
        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = `<p>Temperature: ${weather.temperature}°C</p><p>Wind Speed: ${weather.windspeed} km/h</p>`;
      })
      .catch(error => console.error('Error fetching weather:', error));
  }
  
  // Call the functions to fetch data
  fetchDogImage();
  fetchJoke();
  fetchWeather();
  