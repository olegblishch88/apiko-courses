import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.onChange} placeHolder="Search..." />
      </div>
    )
  }
}
