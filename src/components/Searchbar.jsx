import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Searchbar.css";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");

  function submit() {
}

const searchMovies = (e) => {
    e.preventDefault();
    console.log(searchTerm);
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
