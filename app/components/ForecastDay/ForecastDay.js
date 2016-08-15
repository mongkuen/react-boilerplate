import React, { PropTypes } from 'react'
import css from './ForecastDay.css'
import { formatDatetime } from '../../utils/viewHelper'

ForecastDay.propTypes = {

}

export default function ForecastDay ({datetime, icon, onForecastClick}) {
  return (
    <span>
      <div className={css.forecastDay_container} onClick={onForecastClick} data-datetime={datetime}>
        <div>
          <div className={css[`icon-${icon}`]}></div>
          <h2>{formatDatetime(datetime)}</h2>
        </div>
      </div>
    </span>
  )
}
