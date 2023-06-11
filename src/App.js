import "./App.css";
import * as React from "react";
import MovieCatalog from "./screen/movie-catalog";
import MovieDetail from "./screen/movie-detail";
import TVShow from "./screen/tv-show";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MovieCatalog />} />
        <Route path="/movie-detail/" element={<MovieDetail />} />
        <Route path="/tv-show" element={<TVShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
