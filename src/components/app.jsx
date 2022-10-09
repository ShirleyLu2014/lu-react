import React, { PureComponent } from 'react'
import Home from "./home"
import Profile from "./profile"
export class app extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile></Profile>
      </div>
    )
  }
}

export default app