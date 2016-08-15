import React, { Component } from 'react'
import { getFiveDayForecast } from '../utils/weatherHelper'
import Forecast from '../components/Forecast/Forecast'

export default class ForecastContainer extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      forecast: {}
    }
  }
  async setForecast (location) {
    const forecast = await getFiveDayForecast(location)
    this.setState({
      forecast,
      isLoading: false
    })
  }
  componentWillMount () {
    const { location } = this.props.routeParams
    this.setForecast(location)
  }
  componentWillReceiveProps (nextProps) {
    const { location } = nextProps.routeParams
    this.setForecast(location)
  }
  handleForecastClick (event) {
    const datetime = event.currentTarget.dataset.datetime
    const forecast = this.state.forecast
    this.context.router.push({
      pathname: '/daycast',
      state: { forecast, datetime }
    })
  }
  render () {
    return (
      <Forecast
        forecast={this.state.forecast}
        isLoading={this.state.isLoading}
        onForecastClick={(event) => this.handleForecastClick(event)} />
    )
  }
}
ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
