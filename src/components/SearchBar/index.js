import React from "react";

function SearchBar({ onChange }) {
  return (
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
  );
}

export default SearchBar;
