import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiKey } from "../apikey";
import "./Searchbar.css";

function Searchbar({ fetchMovies, }) {
    const { term } = useParams();
    const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const searchMovies = (e) => {
    e.preventDefault();
    navigate(`/result/${searchTerm}`)
    console.log(searchTerm);
    fetchMovies()
    console.log(movies)
    window.location.reload();
  }

  async function fetchMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${term}`)
    setMovies(data)
    // console.log(data)
}

  return (
    <div className="searchbar">
      <form action="" className="searchbar__form">
        <input
          type="text"
          placeholder="Search Movie Title"
          className="searchbar__input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      <Button className="search__button" onClick={searchMovies} type="submit" >
        <Search className="search-icon" />
      </Button>
      </form>
    </div>
  );
}

export default Searchbar;
