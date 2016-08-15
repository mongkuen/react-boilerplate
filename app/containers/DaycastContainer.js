import React, { Component } from 'react'
import Daycast from '../components/Daycast/Daycast'

export default class DaycastContainer extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  componentDidMount () {
  }
  render () {
    const { forecast, datetime } = this.props.location.state
    return (
      <Daycast forecast={forecast} datetime={datetime} />
    )
  }
}
DaycastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
