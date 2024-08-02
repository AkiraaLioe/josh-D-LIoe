const apiKey = 'e95b95774e606192b9aa75059ede8eb9'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found');
                return;
            }

            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById('weather').style.display = 'block';
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.error('Error:', error);
        });
}
