"use client";
import React, { useEffect, useState, useMemo } from "react";
import Card from "./Card";

const Searches = () => {
  const [data, setData] = useState([
    {
      name: { common: "" },
      flags: { png: "" },
      capital: [""],
      population: 0,
      region: "",
    },
  ]);

  const [region, setRegion] = React.useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(data);

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const handleTyping = (event) => {
    setSearchValue(event.target.value);
  };

  useMemo(() => {
    let countries = [];
    if (region !== "") {
      countries = data.filter((country) => country.region === region);

      if (searchValue !== "") {
        setFilteredCountries(
          countries.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
        );
      } else {
        setFilteredCountries(countries);
      }
    } else if (region === "") {
      if (searchValue !== "") {
        setFilteredCountries(
          data.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          )
        );
      } else {
        setFilteredCountries(data);
      }
    }
  }, [data, region, searchValue]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,nativeName,subregion,currencies,languages,"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredCountries(data);
        setIsLoading(false);
      });
  }, []);

  console.log(data);

  if (isLoading) {
    return <div> Loading .. </div>;
  }

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
          onChange={(e) => handleTyping(e)}
          style={{
            color: "grey",
            height: "2rem",
            width: "10rem",
          }}
        />

        <select
          value={region}
          name="filter by region"
          id="region"
          placeholder="Filter by Region"
          onChange={handleChange}
        >
          <option value={""}>All</option>
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
        {filteredCountries.map((country) => {
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
