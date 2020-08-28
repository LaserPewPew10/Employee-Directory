import React from "react";
import "./SearchBar.css";
function SearchBar({ onChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="search-area col-4"></div>
      <div className="Searchbox">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onChange}
          />
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
