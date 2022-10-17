import React, { PureComponent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
export class App extends PureComponent {
  render() {
    return (
      <div>
        <div>header</div>
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
        <hr></hr>
        <div>
          {/* { */}
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          {/* } */}
        </div>
        <hr></hr>
        <div>footer</div>
      </div>
    );
  }
}

export default App;
