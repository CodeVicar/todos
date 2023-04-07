// src/components/SearchBar.js
import React from "react";

const SearchBar = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);

export default SearchBar;
