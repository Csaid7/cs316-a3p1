import { useEffect, useState } from 'react'
import { getForecast } from './getForecast'
import './App.css'
import DayTile from './DayTile'

function App() {
  // state variable :
  const [forecastData, setForecastData] = useState(null)
useEffect(() => {
    getForecast('us')
      //.then(data => console.log(data))
      .then(data => setForecastData(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h1>Weather Dashboard</h1>
      {/* // if forecastData is available, map over the daily forecast and render DayTile components
      // forecastData == forecastData exisiss( like an if statement) */}
      {forecastData ? (
        // Current Forecast div
        <div>
          <h2>Current Forecast</h2>
          <p>Temperature: {forecastData.current_conditions.air_temperature}°F</p>
          <p>Conditions: {forecastData.current_conditions.conditions}</p>
          <p>Wind  Direction :{forecastData.current_conditions.wind_avg}</p>
          <p>Wind Speed :{ forecastData.current_conditions.wind_direction_cardinal}</p>
          <p>Percipatation :{ forecastData.current_conditions.precip_probability}</p>
          <p>Pressure :{ forecastData.current_conditions.sea_level_pressure}</p>
        <div>
          <h2>10-Day Forecast</h2>
          {/* Loop through each day in the daily array and create a DayTile component for it */}
        {/* forecastData.forecast.daily = array of 10 days */}
        {/* .map() = goes through EACH day in the array (like a for loop) */}
        {/* (day, index) => = for each item, call it 'day' and give it an index number */}
        {/* <DayTile data={day} /> = create a DayTile component and pass the day's data to it */}
          {forecastData.forecast.daily.map((day, index) => (
            <DayTile key={index} data={day} />
          ))}
        </div>
        </div>
      ) : (
        // No data yet - show loading message
        <p>Loading...</p>
      )}
    </div>
    
  )
}

export default App
