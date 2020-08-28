import React from "react";
import SearchBar from "../SearchBar";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="search-area col-4">
        <SearchBar />
      </div>
    </nav>
  );
}

export default Nav;
