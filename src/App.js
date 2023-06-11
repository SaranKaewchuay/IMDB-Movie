import "./App.css";
import * as React from "react";
import MovieCatalog from "./screen/movie-catalog";
import TVShow from "./screen/tv-show";
import MovieDetail from "./screen/movie-detail";

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
