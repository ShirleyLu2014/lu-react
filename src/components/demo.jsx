import React, { PureComponent } from "react";
import store from "../storeLu";
import { addNumber } from "../storeLu/actionCreator";
export class demo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count,
    };
  }
  addNumer(num) {
    console.log(num);
    store.dispatch(addNumber(num));
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ count: state.count });
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <div>数字：{count}</div>
        <button onClick={() => this.addNumer(5)}>+5</button>
        <button onClick={() => this.addNumer(8)}>+8</button>
      </div>
    );
  }
}

export default demo;
