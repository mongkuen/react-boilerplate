import React, { PropTypes } from 'react'
import css from './ForecastLocation.css'
import { formatLocation } from '../../utils/viewHelper'

ForecastLocation.propTypes = {

}

export default function ForecastLocation ({forecast}) {
  const location = formatLocation(forecast)

  return (
    <span>
      <h1 className={css.header}>{location}</h1>
    </span>
  )
}
