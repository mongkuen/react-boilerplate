export function formatLocation(forecast) {
  return `${forecast.city.name}, ${forecast.city.country}`
}

export function formatDatetime(datetime) {
  const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' }
  return new Date(datetime).toLocaleDateString('en-US', dateOptions)
}

export function isSameDay (datetime, compareDatetime) {
  datetime = new Date(datetime)
  compareDatetime = new Date(compareDatetime)
  return datetime.toDateString() === compareDatetime.toDateString();
};

export function formatTime(datetime) {
  const hour = new Date(datetime).getHours()
  return `${hour}:00`
}

export function titleize(title) {
  const string_array = title.split(' ')
  return string_array.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export function getMinTemp(daycast) {
  const min_temp = daycast.reduce((min, current) => {
    const current_temp = current.main.temp_min
    if (current_temp < min) min = current_temp
    return min
  }, daycast[0].main.temp_min)
  return parseInt(min_temp)
}

export function getMaxTemp(daycast) {
  const max_temp = daycast.reduce((max, current) => {
    const current_temp = current.main.temp_max
    if (current_temp > max) max = current_temp
    return max
  }, daycast[0].main.temp_max)
  return parseInt(max_temp)
}

export function getAverageHumidity(daycast) {
  const humiditySum = daycast.reduce((accumulator, current) => {
    return accumulator += current.main.humidity
  }, 0)
  return parseInt(humiditySum / daycast.length)
}
