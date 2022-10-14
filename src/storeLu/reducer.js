import { ADD_NUMBER, ADD_BANNER } from "./constants";
const defaultState = {
  count: 0,
  banner: [{ name: "hahah" }],
};
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        count: state.count + action.count,
      };
    case ADD_BANNER:
      return {
        ...state,
        banner: action.banner,
      };
    default:
      return defaultState;
  }
};
export default reducer;
