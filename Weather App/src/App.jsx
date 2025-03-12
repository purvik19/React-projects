import { useState } from 'react'
import './App.css'
import { handleSearch } from './hook/customehook'
function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null)




  const handleSearchClick = () => {
    handleSearch(city,setWeatherData);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4 text-white">
      <div className="card bg-gray-700 rounded-lg shadow-lg p-6 w-full sm:w-96">
        <div className="search flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 rounded border border-gray-300"
          />
          <button
            onClick={handleSearchClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <img src="../src/img/search.png" alt="search" className="w-5 h-5" />
          </button>
        </div>

        <div className="weather text-center">
        {weatherData ? (
           <>
          <img
            className="weather-icon mx-auto w-40"
            src={`../src/img/${weatherData.weather[0].main}.png`}
            alt="weather icon"
          />
          <h1 className="text-6xl font-bold">22°C</h1>
          <h2 className="text-xl text-white">{weatherData.name}</h2>
          
          <div className="details mt-6 flex justify-between text-sm text-white">
            <div className="col flex items-center">
              <img src="../src/img/humidity.png" alt="humidity" className="w-6 h-6 mr-2" />
              <div className="left">
                <p className="humidity">{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col flex items-center">
              <img src="../src/img/wind.png" alt="wind speed" className="w-6 h-6 mr-2" />
              <div className="right">
                <p className="wind">{weatherData.wind.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
          </>
        ) :(
          <h2 className="text-xl text-white">Enter a city to get the weather</h2>
        )}
        </div>
      </div>
    </div>
  )
}

export default App
