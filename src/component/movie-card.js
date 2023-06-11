import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

function MovieCard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let page = 0

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://imdb-api.com/en/API/Top250Movies/k_87rkt627"
      );
      const newDataSlice = response.data.items.slice(
        page * 28,
        (page + 1) * 28
      );
      
      setData((prevData) => [...prevData, ...newDataSlice]);
      page = page + 1
    
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1
    ) {
      fetchData();
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="grid">
        {data.map((data) => (
          <Link
            to={`/movie-detail?id=${data.id}`}
            className="text-decoration-none"
            key={data.id} 
          >
            <div class="row">
              <div class="card column">
                <img
                  src={data.image}
                  alt={data.title}
                  className="card-image"
                />
                <div className="text-center padding-10">
                  <p className="card-title ellipsis-title">{data.title}</p>
                  <p className="card-description ellipsis-description">
                    {data.crew}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ textAlign:"center"}}>
        {isLoading && <h1 className="text-center">Loading...</h1>}
      </div>
    </div>
  );
}


export default MovieCard;