import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
} from "../../features_redux/movies/movieSlice";
import MovieCard from "../../MovieCard/MovieCard";
import "../MovieListing/MovieListing.scss";
import Slider from "react-slick";
import { Settings } from "../../common/setting";

const MovieListing = () => {
  
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log("useselector", movies);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((shows, index) => <MovieCard key={index} data={shows} />)
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );
    console.log('check rendred', renderMovies.length,renderShows.length);
  return (
    <div>
      {renderMovies.length && renderShows.length?<> <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            <Slider {...Settings}>{renderMovies}</Slider></div>
        </div>
        <div className="show-list">
          <h2>Shows</h2>
          <div className="movie-container">
            <Slider {...Settings}>{renderShows}</Slider></div>
        </div>
      </div></>:<div className="fa-3x"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span></div>}
     
    </div>
  );
};

export default MovieListing;
