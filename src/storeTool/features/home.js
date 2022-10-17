import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetcHomeData = createAsyncThunk("fetcHomeData", async () => {
  const res = await axios.get("http://123.207.32.32:8000/home/multidata");
  const banner = res.data.data.banner.list;
  console.log("banner", banner);
  return banner;
});
const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
  },
  reducers: {
    changeBanner(state, { payload }) {
      state.banners = payload;
    },
  },
  extraReducers: {
    [fetcHomeData.pending]() {
      console.log("pending");
    },
    [fetcHomeData.fulfilled](state, { payload }) {
      console.log("fulfilled");
      state.banners = payload;
    },
    [fetcHomeData.rejected]() {
      console.log("rejected");
    },
  },
});
export const { changeBanner } = homeSlice.actions;
export default homeSlice.reducer;
