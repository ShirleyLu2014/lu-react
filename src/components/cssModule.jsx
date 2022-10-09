import React, { PureComponent } from 'react'
import cssStyle from "./cssModule.module.css"
export class cssModule extends PureComponent {
  render() {
    return (
      <div className={cssStyle.title}>cssModule</div>
    )
  }
}

export default cssModule