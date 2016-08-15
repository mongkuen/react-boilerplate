import axios from 'axios'
const id = 'b714ec74bbab5650795063cb0fdf5fbe'

export async function getFiveDayForecast(location) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&mode=json&units=imperial&appid=${id}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) { console.warn(error) }
}
