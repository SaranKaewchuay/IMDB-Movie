import React, { useEffect } from "react";
import "../style/style.css";
import NavBar from "../component/navbar";
import TVCard from "../component/tvCard";
import useFetchData from "../component/useFetchData";
import useInfiniteScroll from "../component/useInfiniteScroll";


const TVShow = () => {

  window.scrollTo({
    top: 0,
    behavior: 'auto', 
  });
  
  const { data, isLoading, fetchData } = useFetchData(
    "https://imdb-api.com/en/API/Top250TVs/k_g8cmpded"
  );



  useInfiniteScroll(fetchData);

  return (
    <div className="container margin-top-bottom-5">
      <NavBar />
      <p className="text-catalog-title">Latest TV Shows</p>
      <div className="grid">
        {data.map((item) => (
          <TVCard key={item.id} data={item} />
        ))}
      </div>
      <div style={{ textAlign:"center"}}>
        {isLoading && <h1 className="text-center">Loading...</h1>}
      </div>
    </div>
  );
};

export default TVShow;


