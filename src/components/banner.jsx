import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bannerChange } from "../storeLu/actionCreator";
import axios from "axios";
export class Banner extends PureComponent {
  componentDidMount() {
    const { getBanner } = this.props;
    // axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    //   console.log(res);
    //   const banners = res.data.data.banner.list;
    //   console.log(banners);
    //   getBanner(banners);
    // });
    getBanner();
  }
  render() {
    const { banner } = this.props;
    return (
      <div>
        <h2>banner</h2>
        <ul>
          {banner.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  banner: state.banner,
});
const mapDispatchToProps = (dispatch) => ({
  getBanner() {
    dispatch(bannerChange());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
