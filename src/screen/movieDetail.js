import React from "react";
import { useLocation } from "react-router-dom";
import "../style/style.css";
import BreadCrumb from "../component/breadcrumb";
import useFetchMovieDetail from "../component/useFetchMovieDetail";

const MovieDetail = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const data = useFetchMovieDetail(id);

  return (
    <div className="container">
      <div className="margin">
        <BreadCrumb title={data.title} />
        <div className="row ">
          <div className="column-contents flex-container">
            <img className="image-card" src={data.image} alt="Movie Poster" />
          </div>
          <div className="flex-container">
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
};

export default MovieDetail;
