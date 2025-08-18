const apiKey = "e48e1462ef8dbf2fc8aa03f53a87f135"; 
// replace with your OpenWeatherMap API key

async function search() {
  const city = document.getElementById("taskInput").value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    // Update your <p> tags with weather data
    document.getElementById("name").innerText = `City Name: ${data.name}, ${data.sys.country}`;
    document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;

    // Weather icon → we insert <img> into the <p>
    const icon = data.weather[0].icon;
    document.getElementById("weather").innerHTML = `Weather icon: <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">`;

  } catch (error) {
    document.getElementById("name").innerText = "City Name: Error";
    document.getElementById("temp").innerText = "Temperature: --";
    document.getElementById("humidity").innerText = "Humidity: --";
    document.getElementById("weather").innerText = `❌ ${error.message}`;
  }
}
