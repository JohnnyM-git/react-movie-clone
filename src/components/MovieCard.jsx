import React from 'react'
import './MovieCard'

function MovieCard({ title, }) {
  return (
    <div>
        <div className="container">
            <div className="row">
                <figure className="movie__poster">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg" alt="" />
                </figure>
                <h2>{title}</h2>
                <h4>2011</h4>
            </div>
        </div>
    </div>
  )
}

export default MovieCard