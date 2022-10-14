import { ADD_NUMBER, ADD_BANNER } from "./constants";
import axios from "axios";
function addNumber(num) {
  return {
    type: ADD_NUMBER,
    count: num,
  };
}
function bannerData(banner) {
  return {
    type: ADD_BANNER,
    banner,
  };
}
function bannerChange() {
  return (dispatch) => {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      console.log(res);
      const banners = res.data.data.banner.list;
      console.log("banner", banners);
      dispatch(bannerData(banners));
      //  getBanner(banners);
    });
  };
}
export { addNumber, bannerChange };
