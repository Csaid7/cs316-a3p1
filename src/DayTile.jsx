function DayTile({ data }) {
    const iconMap = {
  'clear-day': '☀️',
  'clear-night': '🌙',
  'cloudy': '☁️',
  'partly-cloudy-day': '⛅',
  'partly-cloudy-night': '☁️',
  'rainy': '🌧️',
  'possibly-rainy-day': '🌦️',
  'possibly-rainy-night': '🌧️',
  'possibly-thunderstorm-day': '⛈️',
  'possibly-thunderstorm-night': '⛈️',
  'snowy': '❄️',
  'foggy': '🌫️',
  'windy': '💨',
  'thunderstorm': '⛈️'
};
 const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className ="day-tile">
        <span style={{fontSize: '48px'}}>
          {iconMap[data.icon] || '❓'}
      </span>
      <h3>{monthNames[data.month_num-1]} {data.day_num}</h3>
      <p>High: {data.air_temp_high}°F</p>
      <p>Low: {data.air_temp_low}°F</p>
      <p>{data.conditions}</p>
      <p>Precip: {data.precip_probability}%</p>
      <p>🌅 {new Date(data.sunrise * 1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})}</p>
      <p>🌇 {new Date(data.sunset * 1000).toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})}</p>
     
    </div>
  )
}

export default DayTile