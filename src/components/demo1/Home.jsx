import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../../storeTool/features/counter";

export class Home extends PureComponent {
  addNumber(num) {
    console.log("jia");
    this.props.addNumber(num);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={(e) => this.addNumber(8)}>+8</button>
        <button onClick={(e) => this.addNumber(-8)}>-8</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
