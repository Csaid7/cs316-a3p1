import { useEffect, useState } from 'react'
import { getForecast } from './getForecast'
import './App.css'

function App() {
  // state variable :
  const [forecastData, setForecastData] = useState(null)
useEffect(() => {
  getForecast('us')
    .then(data => setForecastData(data))
}, [])

  return (
    <div>
      <h1> Weather Dashboard</h1>
      <p> Forecast data will go here</p>
    </div>
  )
}

export default App
