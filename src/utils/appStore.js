import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSlice from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesReducer,
    gpt: gptSlice,
  },
});

export default appStore;
