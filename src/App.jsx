import { Component } from "react";
// import TabControl from "./components/tabControl"
// import Transitions from "./components/transitions"
// import CssModule from "./components/cssModule"
import CssInJs from "./components/cssInJs";
import Redux from "./components/redux";
import AppHtml from "./components/app";
import Demo from "./components/demo";
import About from "./components/about";
import Banner from "./components/banner";
import { connect } from "react-redux";
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ["左边", "中间", "右边"],
    };
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <Banner></Banner>
        <Demo></Demo>
        <h2>{name}</h2>
        <hr></hr>
        <AppHtml />
        <Redux></Redux>
        <About></About>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};
export default connect(mapStateToProps)(App);
