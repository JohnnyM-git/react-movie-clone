import React from "react";
import Nav from "../components/Nav";
import Search from "../components/Search";
import "./Home.css";

function Home() {
  return (
    <div>
      <div id="landing">
        <div className="container">
          <div className="row">
            <div className="header__description">
              <div className="header__title">
                <h1>
                  <span className="blue">Streamify</span> the world best site
                  for streaming <span className="blue">Movies</span>
                </h1>

              </div>
              <div className="search">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
