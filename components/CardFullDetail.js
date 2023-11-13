import React from "react";
import Header from "./Header";
import Link from "next/link";
const CardFullDetail = ({
  name,
  population,
  region,
  flag,
  capital,
  nativeName,
  subregion,
  currencies,
  languages,
}) => {
  return (
    <div>
      <Header />
      <Link href="/">Back</Link>
      <div className="country-detail" style={{ display: "flex" }}>
        <div className="left">
          <img src={flag} alt="country flag" />
        </div>
        <div className="right">
          <h3>{name}</h3>

          <p>Native Name:{nativeName} </p>
          <p>Population: {population} </p>
          <p>Region: {region} </p>
          <p>Sub Region: {subregion}</p>
          <p>Capital: {capital} </p>
          <p>Currencies: {currencies}</p>
          <p>Language:{languages} </p>
        </div>
        <div className="bottom">
          Border Countries:
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </div>
  );
};

export default CardFullDetail;
