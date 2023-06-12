import React from "react";
import "../style/style.css";
import NavBar from "../component/navbar";
import MovieCard from "../component/movieCard";
import useFetchData from "../component/useFetchData";
import useInfiniteScroll from "../component/useInfiniteScroll";


const MovieCatalog = () => {
  const { data, isLoading, fetchData } = useFetchData(
    "https://imdb-api.com/en/API/Top250Movies/k_x5mdlc4x"
  );

  useInfiniteScroll(fetchData);

  return (
    <div className="container margin-top-bottom-5">
      <NavBar />
      <p className="text-catalog-title">Latest Movies</p>
      <div className="grid">
        {data.map((item) => (
          <MovieCard key={item.id} data={item} />
        ))}
      </div>
      <div style={{ textAlign:"center"}}>
        {isLoading && <h1 className="text-center">Loading...</h1>}
      </div>
    </div>
  );
};

export default MovieCatalog;
