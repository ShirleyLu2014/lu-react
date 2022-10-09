import React, { PureComponent } from 'react'
import { Fragment } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import "./transition.css"

export class transitions extends PureComponent {
  constructor() {
    super()
    this.state = {
        isShow: true
    }
  }
  handleChange() {
    const { isShow } = this.state 
    this.setState({
        isShow: !isShow
    })
  }
  render() {
    const { isShow } = this.state
    return (
    <>
        <button onClick={e => this.handleChange()}>切换按钮</button>
        <CSSTransition in={isShow} classNames="lu" timeout={2000} unmountOnExit appear>
            <div >transitions</div>
        </CSSTransition>
    </>
    )
  }
}

export default transitions