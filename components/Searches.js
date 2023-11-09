"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Searches = () => {
  const mockData = ["Mexico", "Amsterdam", "London", "Nigeria"];

  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
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
          justifyContent: "space-between",
        }}
      >
        {mockData.map((country) => {
          return <Card key={country} />;
        })}
      </div>
    </div>
  );
};

export default Searches;
