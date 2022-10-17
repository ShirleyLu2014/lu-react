import { Component } from "react";
import { connect } from "react-redux";
import Home from "./components/demo1/Home";
import Profile from "./components/demo1/Profile";
import "./styles/common.css";
class App extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>coiunt: {counter}</h2>
        <hr></hr>
        <div className="flex-class">
          <Home></Home>
          <Profile></Profile>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};
export default connect(mapStateToProps)(App);
