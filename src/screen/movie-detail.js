import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../style/style.css";
import Breadcrumb from "../component/breadcrumb";

function MovieDetail() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Title/k_e95umfvt/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="margin">
        <Breadcrumb title={data.title} />
        <div className="row ">
          <div className="column-contents flex-container">
            <img className="image-card" src={data.image} />
          </div>
          <div class="flex-container">
            <div className="margin-left">
              <div className="margin-content ">
                <p className="title">{data.title}</p>
              </div>
              <div className="margin-content ">
                <span className="font-size-content">{data.genres} </span>

                <span style={{ marginLeft: "20px" }}>
                  <img
                    className="icon-image"
                    src="https://img.icons8.com/android/48/calendar.png"
                    alt="calendar"
                  />
                </span>
                <span className="font-size-content">{data.year} </span>

                <span style={{ marginLeft: "20px" }}>
                  <img
                    className="icon-image"
                    src="https://img.icons8.com/material-outlined/24/clock--v1.png"
                    alt="clock"
                  />
                </span>

                <span className="font-size-content">{data.runtimeStr} </span>
              </div>
              <div className="margin-content ">
                <p className="font-size-content">{data.plot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
