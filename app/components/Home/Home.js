import React, { PropTypes } from 'react'
import css from './Home.css'
import MainForm from '../Main/MainForm/MainForm'
import MainButton from '../Main/MainButton/MainButton'
import FormContainer from '../../containers/FormContainer'

export default function Home () {
  return (
    <div className={css.center}>
      <h1 className={css.header}>What's Outside?</h1>
      <FormContainer>
        <MainForm placeholder='Lincoln, Nebraska' style="home-form"/>
        <MainButton text='Get Weather' style="home-button" />
      </FormContainer>
    </div>
  )
}
