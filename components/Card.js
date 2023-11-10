import React from "react";

const Card = ({ name, population, region, flag, capital }) => {
  return (
    <div
      className="country-cards"
      style={{
        backgroundColor: "#fefefc",
        boxShadow: "0 .5rem 5px lightgrey",
        marginBottom: "1rem",
        width: "25vw",
      }}
    >
      <div>
        <article
          className="country"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src={flag} alt="country flag" style={{ width: "25vw" }} />
          <h2>{name}</h2>
          <p>Population: {population} </p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </article>
      </div>
    </div>
  );
};

export default Card;
