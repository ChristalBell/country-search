import React from "react";
import CardFullDetail from "./CardFullDetail";
import Link from "next/link";

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
      <div
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
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
            <h2>
              <Link href="/details/page"> {name}</Link>
            </h2>
            <p>Population: {population} </p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Card;
