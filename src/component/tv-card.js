import React from "react";

const TVCard = ({ data }) => {
  return (
    <div className="row">
      <div className="card column">
        <img src={data.image} alt={data.title} className="card-image" />
        <div className="text-center padding-10">
          <p className="card-title ellipsis-title">{data.title}</p>
          <p className="card-description ellipsis-description">{data.crew}</p>
        </div>
      </div>
    </div>
  );
};

export default TVCard;
