import React from "react";

const Card = () => {
  return (
    <div className="country-cards">
      <article
        className="country"
        style={{
          backgroundColor: "pink",
        }}
      >
        <h2>Country Name</h2>
        <p>Population: </p>
        <p>Region: </p>
        <p>Capital: </p>
      </article>
    </div>
  );
};

export default Card;
