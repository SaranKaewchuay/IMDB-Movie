import "./App.css";
import * as React from "react";
import MovieCatalog from "./screen/movieCatalog";
import TVShow from "./screen/tvShow";
import MovieDetail from "./screen/movieDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieCatalog />} />
        <Route path="/tv-show" element={<TVShow  />} />
        <Route path="/movie-detail" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
