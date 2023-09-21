import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: "idle",
  },
  reducers: {
    fetchMoviesLoading: (state) => {
      state.loading = "loading";
    },
    fetchMoviesError: (state) => {
      state.loading = "error";
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = "success";
      state.movies = movies;
    },
    fetchMovies: () => {},
    fetchSearchResults: () => {},
  },
});

export const {
  fetchMovies,
  fetchSearchResults,
  fetchMoviesSuccess,
  fetchMoviesLoading,
  fetchMoviesError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;

export default moviesSlice.reducer;
