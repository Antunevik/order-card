import React from "react";
import Component4 from "./Component4";

const Card = () => {
  return (
    <div className="card">
      <div className="border">
        <div className="card-content">
          <h1 className="card-title">Order Summary</h1>
          <p className="card-text">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <Component4 />
        </div>
      </div>
    </div>
  );
};

export default Card;
