import React, { PropTypes } from 'react'
import css from './Daycast.css'
import { isSameDay, formatLocation, formatDatetime, getMinTemp, getMaxTemp, getAverageHumidity } from '../../utils/viewHelper'
import ForecastLocation from '../ForecastLocation/ForecastLocation'
import DaySegment from '../DaySegment/DaySegment'


Daycast.propTypes = {

}

export default function Daycast ({forecast, datetime}) {
  const daycast = forecast.list.filter((item) => isSameDay(item.dt_txt, datetime))

  return (
    <span>
      <ForecastLocation forecast={forecast} />
      <h3>{formatDatetime(datetime)}</h3>
      <p className={css.daycast_paragraph}>{`Min. Temp: ${getMinTemp(daycast)}°F`}<br/>
                                           {`Max. Temp: ${getMaxTemp(daycast)}°F`}<br/>
                                           {`Humidity: ${getAverageHumidity(daycast)}%`}</p>
        <div className={css.daycast_container}>
          {daycast.map((segment) => {
            return <DaySegment segment={segment} key={segment.dt}/>
          })}
        </div>
    </span>
  )
}
