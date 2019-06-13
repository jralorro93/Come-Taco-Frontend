import React, { Component } from 'react'

export default class ItemCard extends Component {
  render() {
    return(
      <div>
        <h3>{this.props.food.name}</h3>
        <h5>{this.props.food.price}</h5>
        <h6 onClick={() => this.props.handleDelete(this.props.food)}>Remove</h6>
      </div>
    )
  }
}
