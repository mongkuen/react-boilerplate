import React, { PropTypes } from 'react'
import css from './MainButton.css'

export default function MainButton ({text, style}) {
  return (
    <span>
      <button type="submit" className={`btn btn-default ${css[style]}`}>{text}</button>
    </span>
  )
}
