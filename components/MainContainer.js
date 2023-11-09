import React from "react";
import Header from "./Header";
import Searches from "./Searches";
import { useStore } from "zustand";

const MainContainer = () => {
  // const isDarkMode = useStore((state) => state.isDarkMode);

  return (
    <div>
      <Header />
      <Searches />
    </div>
  );
};

export default MainContainer;
