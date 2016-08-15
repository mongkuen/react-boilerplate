import React, { Component } from 'react'

export default class FormContainer extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }
  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    e.target.value = ''
    const location = this.state.value
    this.context.router.push(`/forecast/${location}`)
  }
  render () {
    return (
      <form className={`${this.props.style}`}
        onSubmit={(e) => this.handleSubmit(e)}
        onChange={(e) => this.handleChange(e)}>
        {this.props.children}
      </form>
    )
  }
}
FormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
