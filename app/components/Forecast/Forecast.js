import React, { PropTypes } from 'react'
import css from './Forecast.css'
import ForecastDay from '../ForecastDay/ForecastDay'
import ForecastLocation from '../ForecastLocation/ForecastLocation'

Forecast.propTypes = {

}

function getForecastDays (forecast) {
  return forecast.list.reduce((obj, curr) => {
    const day = curr.dt_txt.substr(0 , 10)
    if (obj['days'].indexOf(day) === -1 ) {
      obj.days.push(day)
      obj.forecastDays.push(curr)
    }
    return obj
  }, {forecastDays: [], days: []})
}

export default function Forecast ({forecast, isLoading, onForecastClick}) {
  if (isLoading) return <div>Loading</div>
  if (forecast.cod === '404') return <div className='container'><h1>{forecast.message}</h1></div>

  const forecastDays = getForecastDays(forecast).forecastDays
  return (
    <span>
      <div className='container'>
        <ForecastLocation forecast={forecast} />
        <div className={css.forecast_container}>
          {forecastDays.map((day) => {
            const icon = day.weather[0].icon
            return <ForecastDay
                    datetime={day.dt_txt}
                    icon={icon}
                    key={day.dt}
                    onForecastClick={onForecastClick} />
          })}
        </div>
      </div>
    </span>
  )
}
