import { useEffect, useState } from 'react'
import { getForecast } from './getForecast'
import './App.css'
import DayTile from './DayTile'

function App() {
  // Weather emoji icon mapping
const iconMap = {
  'clear-day': '☀️',
  'clear-night': '🌙',
  'cloudy': '☁️',
  'partly-cloudy-day': '⛅',
  'partly-cloudy-night': '☁️',
  'rainy': '🌧️',
  'possibly-rainy-day': '🌦️',
  'possibly-rainy-night': '🌧️',
  'snowy': '❄️',
  'foggy': '🌫️',
  'windy': '💨',
  'thunderstorm': '⛈️'
};

  // state variable :
  const [forecastData, setForecastData] = useState(null)
useEffect(() => {
    getForecast('us')
      //.then(data => console.log(data))
      .then(data => setForecastData(data))
      .catch(error => console.error(error))
  }, [])
  const handleRefresh = () => {
  getForecast('us')
    .then(data => setForecastData(data))
    .catch(error => console.error(error));
};


  return (
    <div>
      <h1 style= {{textAlign :'center', paddingBottom: '2px'}}>Weather Dashboard</h1>
      <button onClick={handleRefresh} className='refreshBtn'>Refresh</button>
      {/* // if forecastData is available, map over the daily forecast and render DayTile components
      // forecastData == forecastData exisiss( like an if statement) */}
      {forecastData ? (
  <>
    <div className="current-conditions">
      <h2 style={{textAlign:'center'}}>Current Forecast</h2>
      <h3 style={{ color: '#ffffffff' }}> Current condition for Lexington at : {new Date(forecastData.current_conditions.time * 1000).toLocaleString()}</h3>
       <span style={{fontSize: '48px'}}>
          {iconMap[forecastData.current_conditions.icon]}
      </span>
      <p>Temperature: {forecastData.current_conditions.air_temperature}°F</p>
      <p>Conditions: {forecastData.current_conditions.conditions}</p>
      <p>Wind Direction: {forecastData.current_conditions.wind_direction_cardinal}</p>
      <p>Wind Speed: {forecastData.current_conditions.wind_avg} mph</p>
      <p>Precipitation: {forecastData.current_conditions.precip_probability}</p>
      <p>Pressure: {forecastData.current_conditions.sea_level_pressure}</p>
      
    </div>  {/* ← CLOSE current-conditions HERE! */}
    
    <h2 style={{textAlign:'center'}}>10-Day Forecast</h2>
     
    <div className="forecast-container">
      {forecastData.forecast.daily.map((day, index) => (
        <DayTile key={index} data={day} />
      ))}
    </div>
  </>
) : (
  <p>Loading...</p>
)}
    </div>
    
  )
}

export default App
