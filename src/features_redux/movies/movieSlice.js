import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    //console.log('coming from actions',term);
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "mymovies",
  //initialState:initialState,
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeShowOrMovies:(state)=>{
      state.selectedMovieOrShow={};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Request is Pending!");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Request is Fulfilled!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Request is Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Request is Fulfilled!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Detail Request is Fulfilled!");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

//console.log("actions are", movieSlice.actions);
//export const { addMovies } = movieSlice.actions;
export const {removeShowOrMovies}=movieSlice.actions;
//console.log(movieSlice.actions);
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllselectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
// console.log("selected", getAllselectedMovieOrShow);

export default movieSlice.reducer;
