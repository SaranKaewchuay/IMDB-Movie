import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/style.css";
import NavBar from "./navbar";

function TVCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250TVs/k_n8j5zft2")
      .then((response) => {
        setData(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <div>
      <NavBar />
      <div className="grid">
        {data.map((data) => (
            <div class="row">
              <div class="card column">
                <img src={data.image} alt={data.title} className="card-image" />
                <div className="text-center padding-10">
                  <p className="card-title ellipsis-title">{data.title}</p>
                  <p className="card-description ellipsis-description">
                    {data.crew}
                  </p>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default TVCard;
