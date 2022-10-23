import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey } from '../apikey';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search'
import Searchbar from '../components/Searchbar';
import './Results.css'

function Results() {
    const { term } = useParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(term)

    useEffect(() => {
        fetchMovies()
    }, [])

    async function fetchMovies() {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${term}`)
        setMovies(data)
        setLoading(false)
        console.log(movies)
    }
    
    console.log(movies)
    const firstSix = movies.Search?.slice(0, 6)
    console.log(firstSix)
    let result = term.toUpperCase()
    
  return (
    <div className='results'>
    <Searchbar />
    {/* <h4>{result}</h4> */}
{loading
        ? new Array(6).fill(0).map((_, index) => (
            <div className="movies--skeleton" key={index}>
              <div className="post__body">
                <p className="movie__img--skeleton"></p>
              </div>
              <div className="movie__title">
                <div className="movie__title--skeleton"></div>
              </div>
            </div>
          ))
        :
        firstSix.map((post) => {
            return (
                <div className='movies' key={post.imdbID}>
                <MovieCard title={post.Title} poster={post.Poster} year={post.Year} imdbID={post.imdbID} imdbRating={post.imdbRating} className="movie" />
                </div>
            );
          })}
    </div>    
        
  )
}

export default Results



