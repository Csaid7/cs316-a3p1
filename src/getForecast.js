export async function getForecast(units) {
const TOKEN = "97b936d4-e681-4890-bc79-5d58010ea333"
const STATION_ID =   81414
  // pick URL based on units
  let url = `https://swd.weatherflow.com/swd/rest/better_forecast?station_id=${STATION_ID}&units_temp=c&units_wind=kph&units_pressure=mb&units_precip=mm&units_distance=km`;
  if (units === 'us') {
    // per-metric units parameters per API docs
    url = `https://swd.weatherflow.com/swd/rest/better_forecast?station_id=${STATION_ID}&units_temp=f&units_wind=mph&units_pressure=inhg&units_precip=in&units_distance=mi`;
  }

  const headers = { 'Authorization': `Bearer ${TOKEN}` };
  try {
    const res = await fetch(url, { headers })
    if (!res.ok) {
      // bad request or server error, build error object to return.
      return { error: `HTTP ${res.status}` };
    }
    // No Error return whole forecast object
    return await res.json();
  // Most server errrors are caught here and returned as error object.
  // How can you handle or catch CORS errors? Or can you?
  } catch (error) {
    // Network error or other issue
    return { error: error.message };
  }

}