
import PropTypes from 'prop-types'
import { CssIn } from "./cssIn"
import React, { PureComponent } from 'react'

export default class cssInJs extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'green',
      size: '50'
    }
  }
  static propTypes = {}

  render() {
    const { color, size } = this.state
    return (
      <CssIn color={color} size={size}>
        <div className="title">cssInJs</div>
      </CssIn>
      
    )
  }
}
