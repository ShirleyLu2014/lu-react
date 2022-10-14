import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../storeLu/actionCreator";
export class About extends PureComponent {
  calcNumber(num) {
    this.props.calcNumber(num);
  }
  render() {
    const { count } = this.props;
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={(e) => this.calcNumber(1)}>+1</button>
        <button onClick={(e) => this.calcNumber(7)}>+7</button>
        <button onClick={(e) => this.calcNumber(9)}>+9</button>
        <button onClick={(e) => this.calcNumber(-2)}>-2</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count,
});
const mapDispatchToProps = (dispatch) => ({
  calcNumber(num) {
    dispatch(addNumber(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(About);
