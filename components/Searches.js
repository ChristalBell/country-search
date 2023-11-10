"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Searches = () => {
  const mockData = ["Mexico", "Amsterdam", "London", "Nigeria"];

  const [data, setData] = useState([
    {
      name: { common: "" },
      flags: { png: "" },
      capital: [""],
      population: 0,
      region: "",
    },
  ]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <div>
      <div
        style={{
          alignContent: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: "4rem 4rem",
        }}
      >
        <input
          type="text"
          name="country search"
          placeholder="Search by Country"
          style={{
            color: "grey",
            height: "2rem",
            width: "10rem",
          }}
        />

        <select
          name="filter by region"
          id="region"
          placeholder="Filter by Region"
        >
          <option value={"All"}>All</option>
          <option value={"Africa"}>Africa</option>
          <option value={"Americas"}>Americas</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Oceania"}>Oceania</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((country) => {
          return (
            <Card
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital[0]}
              flag={country.flags.png}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Searches;
