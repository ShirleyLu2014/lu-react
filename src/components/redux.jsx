import React, { PureComponent } from 'react'
import store from "../store"
import { changeName } from "../store/actionCreator"
export class redux extends PureComponent {
  constructor() {
    super()
    this.state = {
      name: store.getState().name,
      count: 0
    }
  }
  handleChange() {
    // const { count } = this.state
    // const nameAction = { type: "change_name", name: "nihaoya"}
    store.dispatch(changeName("nihaoya"))
    console.log("修改数据")
    console.log(store.getState())
    this.render()  
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        name: store.getState().name
      })
    })
  }
  render() {
    const { name } = this.state
    return (
      <div>
        <button onClick={() => this.handleChange()}>修改数据</button>
        <h2>{name}</h2>
      </div>
    )   
  }   
}

export default redux