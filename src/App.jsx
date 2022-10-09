import { Component } from "react"
// import TabControl from "./components/tabControl"
// import Transitions from "./components/transitions"
// import CssModule from "./components/cssModule"
import CssInJs from "./components/cssInJs"
import Redux from "./components/redux"
import AppHtml from "./components/app"
class App extends Component {
  constructor() {
    super()
    this.state = {
      title: ["左边", "中间", "右边"]
    }
  }
  render() {
    // const { title } = this.state
    return (
      <div>
        <AppHtml/>
        <Redux></Redux>
      </div>
      
    )
  }
}

export default App;
