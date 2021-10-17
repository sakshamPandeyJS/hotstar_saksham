import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";

//console.log("movieReducer is", movieReducer);
export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
