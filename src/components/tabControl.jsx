import React, { Component } from 'react'
import "./tabControl.css"

export class tabControl extends Component {
  constructor() {
    super()
    this.state = {
        currentIndex: 0
    }
  }
  handleClick(index) {
    this.setState({
        currentIndex: index
    })
  }
  render() {
    const { title } = this.props
    const { currentIndex } = this.state
    console.log(title)
    return (
      <div class="content">
        <div class="title">
        {title.map((item, index) => {
            return (<div 
                    class={currentIndex === index ? 'active' : ''}
                    onClick={() => this.handleClick(index)}
                    >{item}</div>)
        })}
        </div>
        
        <div class="subcontent">内容</div>
      </div>
    )
  }
}

export default tabControl