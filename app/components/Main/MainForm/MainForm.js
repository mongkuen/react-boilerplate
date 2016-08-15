import React, { PropTypes } from 'react'
import css from './MainForm.css'

export default function MainForm ({placeholder, style, value}) {
  return (
    <span>
      <div className="form-group">
        <input
          type="text"
          className={`form-control ${css[style]}`}
          placeholder={placeholder}
          value={value} />
      </div>
    </span>
  )
}
