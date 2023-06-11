import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/style.css";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

function MovieCard() {
  const [data, setData] = useState([]);
  const [newDataSlice, setDataSlice] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_e95umfvt")
      .then((response) => {
        setData(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("newDataSlice =", newDataSlice);
  }, [newDataSlice]);

  const fetchData = () => {
    setIsLoading(true);
    const start = newDataSlice.length;
    const end = start + 28;
    const slicedData = data.slice(start, end);

    setDataSlice((prevDataSlice) => [...prevDataSlice, ...slicedData]);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 1) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="grid">
        {newDataSlice.map((data) => (
          <Link
            to={`/movie-detail?id=${data.id}`}
            className="text-decoration-none"
            key={data.id} // Add a unique key prop to each rendered item
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
      <div style={{ margin: "150px" }}>
        {isLoading && <h1 className="text-center">Loading...</h1>}
      </div>
    </div>
  );
}


export default MovieCard;
