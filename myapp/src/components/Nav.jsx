import React from "react";
import "../styles/Nav.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Category from "./Category";

const Nav = () => {
  return (
    <div className="nav">
      <Navbar />
      <SearchBar />
      <Category />
    </div>
  );
};

export default Nav;
