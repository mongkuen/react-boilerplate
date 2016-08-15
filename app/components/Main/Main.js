import React, { PropTypes } from 'react'
import css from './Main.css'
import MainForm from '../Main/MainForm/MainForm'
import MainButton from '../Main/MainButton/MainButton'
import FormContainer from '../../containers/FormContainer'

export default function Main ({children}) {
  return (
    <div className={css.body}>
      <nav className={`navbar navbar-default ${css.navbar}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className={`navbar-brand ${css.brand}`} href="#">
              <span className={`glyphicon glyphicon-globe ${css.glyph}`}></span>
               Outside
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <FormContainer style="navbar-form navbar-right">
              <MainForm placeholder={'Lincoln, Nebraksa'} style="form"/>
              <MainButton text="Get Weather" style="main-button"/>
            </FormContainer>
          </div>
        </div>
      </nav>
      <div className={`${css.background}`}>
        {children}
      </div>
    </div>
  )
}
