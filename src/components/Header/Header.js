import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features_redux/movies/movieSlice";
import userimg from "../../images/user.png";
import "./Header.scss";


const Header = () => {
  const dispatch=useDispatch();
  const [term,setTerm]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    if(term=="") return alert("Please Enter a Movie or Show!")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");

  };
 
  return (
    <div>
      <div className="header">
          <div className="logo">  <Link to="/">Movie App </Link></div>
          <div className="search-bar">
            <form onSubmit={submitHandler}>
              <input type="text" value={term} placeholder="Seach Movies or Shows" onChange={(e)=>setTerm(e.target.value)}/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
       
        <div className="user-image">
          <img src={userimg} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
