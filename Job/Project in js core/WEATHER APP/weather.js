document.addEventListener('DOMContentLoaded', () => {

  const inputText = document.getElementById("city-input")
  const search = document.getElementById("get-weather-btn")
  const weatherInfo = document.getElementById("weather-info")
  const cityName = document.getElementById("city-name")
  const weatherType = document.getElementById("weather")
  const temp = document.getElementById("temperature")
  const errorMessage = document.querySelector(".error-message")

  const API_KEY = "8b8e14300174a5b8106b99875483a7da"

  search.addEventListener("click", async () => {
    const city = inputText.value.trim()
    if (!city) return;
    try {
      const weatherData = await fetchWeatherData(city)
      displayWeatherData(weatherData)
    } catch (error) {
      showError()
    }
  })

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    if (!response.ok) return Error("City not found")
    const data = await response.json()
    return data
  }

  function displayWeatherData(data) {
    cityName.textContent = data.name
    temp.textContent = `Temperature: ${data.main.temp}°C`
    weatherType.textContent = `Weather: ${data.weather[0].description}`
    weatherInfo.classList.remove("hidden")
    errorMessage.classList.add("hidden")
  }

  function showError() {
    weatherInfo.classList.remove("hidden")
    errorMessage.classList.add("hidden")
  }

})