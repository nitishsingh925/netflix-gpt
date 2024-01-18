import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, actions) => {
      const { movieName, movieResults } = actions.payload;
      state.movieResults = movieResults;
      state.movieName = movieName;
    },
  },
});
export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
