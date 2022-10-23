import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../apikey";
import "./MovieInfo.css";
import Rating from "./Rating";

function MovieInfo() {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  async function fetchMovie() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    );
    setMovie(data);
    setLoading(false);
    console.log(data);
    console.log(movie);
    console.log(movie.Actors);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  console.log(movie);
  console.log(imdbID);

  return loading ? (
    <div>
      <div className="container">
        <div className="row">
          <div className="movie__info">
            <div className="movie__info--left">
              <figure className="movie__poster--skeleton">
                <img src="" alt="" />
              </figure>
            </div>
            <div className="movie__info--right">
              <h2 className="movie__title--skeleton"></h2>
              <h2 className="movie__title--skeleton"></h2>
              <p className="movie__description--skeleton"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="container">
        <div className="row">
          <div className="movie__info">
            <div className="movie__info--left">
              <figure className="movie__poster">
                <img src={movie.Poster} alt="" />
              </figure>
            </div>
            <div className="movie__info--right">
                <div className="movie__info--upper">

              <h1 className="movie__info--title">{movie.Title}</h1>
              {/* <h3>Rating: {movie.imdbRating}</h3> */}
              <Rating rating={movie.imdbRating} className="rating" />
              <h2 className="movie__runtime">Runtime: {movie.Runtime}</h2>
                </div>
              <p className="movie__description">{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
