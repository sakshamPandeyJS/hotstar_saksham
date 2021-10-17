import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features_redux/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  // console.log("dispatch has", dispatch);
  const movieText="Harry";
  const showstext="Friends"
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showstext));
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
