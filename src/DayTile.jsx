function DayTile({ data }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Day {data.day_num}</h3>
      <p>High: {data.air_temp_high}°F</p>
      <p>Low: {data.air_temp_low}°F</p>
      <p>{data.conditions}</p>
      <p>Precip: {data.precip_probability}%</p>
      <p></p>
    </div>
  )
}

export default DayTile