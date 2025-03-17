
export const handleSearch = async (city,setWeatherData) => {
    try {
        const apiKeyall = "Your api"; // Get the API key from the environment variable
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKeyall}`);
        const data = await response.json();
        setWeatherData(data)
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
