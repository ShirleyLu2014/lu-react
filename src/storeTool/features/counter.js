import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 999,
  },
  reducers: {
    addNumber(state, action) {
      const payload = action.payload;
      state.counter = state.counter + payload;
      console.log("addNumber");
    },
    subNumber(state, action) {
      console.log("subNumber");
    },
  },
});
export const { addNumber, subNumber } = counterSlice.actions;
export default counterSlice.reducer;
