import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieResults: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { gptMovieNames, gptMovieResults } = action.payload;
      state.gptMovieResults = gptMovieResults;
      state.gptMovieNames = gptMovieNames;
    },
    clearGptMovies: (state) => {
      state.gptMovieNames = null;
      state.gptMovieResults = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovies, clearGptMovies } =
  gptSlice.actions;

export default gptSlice.reducer;
