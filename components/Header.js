import React from "react";
import { useStore } from "zustand";

const Header = () => {
  // const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0rem .5rem .5rem grey",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
      }}
    >
      <h1
        style={{
          fontSize: "1rem",
        }}
      >
        Where in the world?
      </h1>
      <button>Dark Mode</button>
    </div>
  );
};

export default Header;
