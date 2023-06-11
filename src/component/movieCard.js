import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <Link to={`/movie-detail?id=${data.id}`} className="text-decoration-none">
      <div className="row">
        <div className="card column">
          <img src={data.image} alt={data.title} className="card-image" />
          <div className="text-center padding-10">
            <p className="card-title ellipsis-title">{data.title}</p>
            <p className="card-description ellipsis-description">
              {data.crew}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
