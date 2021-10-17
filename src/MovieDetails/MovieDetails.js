import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import '../MovieDetails/MovieDetails.scss';
import 'font-awesome/css/font-awesome.min.css';
import {removeShowOrMovies} from '../features_redux/movies/movieSlice';

import {
  fetchAsyncMovieOrShowDetail,
  getAllselectedMovieOrShow,
} from "../features_redux/movies/movieSlice";
const MovieDetails = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getAllselectedMovieOrShow);

  useEffect(() => {
    //console.log("camera", abc);
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    console.log("data is ", getAllselectedMovieOrShow);
    return()=>dispatch(removeShowOrMovies())
    
  }, [dispatch, imdbID]);
  console.log("data is urs", data);
  return (
    <div className="movie-section">
    {Object.keys(data).length===0?(<div>...Loading</div>):(   <>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i>:{data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i>:{data.imdbVotes}
          </span>
          <span>
            RunTime <i className="fa fa-film"></i>:{data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i>:{data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actor}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title}></img>
      </div>
      </> )}
   
    </div>
  );
};

export default MovieDetails;
