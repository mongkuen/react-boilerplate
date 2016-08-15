import React, { PropTypes } from 'react'
import css from './DaySegment.css'
import iconCSS from '../ForecastDay/ForecastDay.css'
import { formatTime, titleize } from '../../utils/viewHelper'

DaySegment.propTypes = {

}

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

export default function DaySegment ({segment}) {
  const datetime = segment.dt_txt
  const { temp_max, humidity } = segment.main
  const { icon, description } = segment.weather[0]
  return (
    <span>
      <div className={css.DaySegment_container}>
        <div className={iconCSS[`icon-${icon}`] + ' ' + css.DaySegment_icons}></div>
        <div className={css.details}>
          <h3>{formatTime(datetime)}</h3>
          <p>{titleize(description)}</p>
          <p>{`Temperature: ${parseInt(temp_max)}°F`}</p>
          <p>{`Humidity: ${humidity}%`}</p>
        </div>
      </div>
    </span>
  )
}
