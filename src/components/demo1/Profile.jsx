import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetcHomeData } from "../../storeTool/features/home";
import axios from "axios";
export class Profile extends PureComponent {
  componentDidMount() {
    const { fetcHomeData } = this.props;
    fetcHomeData();
    // let { banners } = this.props;
    // axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    //   const banner = res.data.data.banner.list;
    //   console.log("banner", banners);
    //   banners = banner;
    // });
  }
  render() {
    const { banners } = this.props;
    return (
      <div>
        <h2>轮播图</h2>
        <div>
          <ul>
            {banners.map((item) => {
              return <li key={item.title}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    banners: state.home.banners,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetcHomeData() {
      dispatch(fetcHomeData());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
