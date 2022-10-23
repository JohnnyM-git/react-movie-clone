import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MovieCard.css'
import Rating from './Rating';

function MovieCard({ title, poster, year, imdbID, imdbRating }) {
    const navigate = useNavigate();
  return (
    <div key={imdbID} onClick={() => navigate(`/${imdbID}`)} className="movie__card">
        <div className="movie__container">
            <div className="row">
                <figure className="movie__poster">
                    <img src={poster} alt="" className='poster__img' />
                </figure>
                <h2 className='movie__card--title'>{title}</h2>
              {/* <Rating rating={imdbRating} /> */}
                <h4>{year}</h4>
            </div>
        </div>
    </div>
  )
}

export default MovieCard