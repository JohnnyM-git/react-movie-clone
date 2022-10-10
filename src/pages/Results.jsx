import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey } from '../apikey';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search'
import './Results.css'

function Results() {
    const { term } = useParams();
    const [movies, setMovies] = useState([]);
    console.log(term)

    useEffect(() => {
        fetchMovies()
    }, [])

    async function fetchMovies() {
        const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${term}`)
        setMovies(data)
        // console.log(data)
    }
    
    // console.log(movies)
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <Search />
                <h2>Search results for {term}</h2>
                {movies.Search?.map((movie) => 
                <MovieCard title={movie.Title}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Results