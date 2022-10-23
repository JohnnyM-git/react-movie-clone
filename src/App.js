import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";
import Results from "./pages/Results";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/result/:term" element={<Results />} />
          <Route path=":imdbID" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
