import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import "./Search.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const { returnSearch } = useContext(MovieContext);

  const [query, setQuery] = useState("");

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
    returnSearch(e.target.value);
  };

  const querySubmit = (e) => {
    e.preventDefault();
    returnSearch(query);
  };

  useEffect(() => {
    console.log("query: ", query);
  }, [query]);

  return (
    <form className="search" onSubmit={querySubmit}>
      <p className="search-headline">Movie Title</p>
      <div className="search-input-container">
        <div className="search-input-icon">
          <AiOutlineSearch style={{ backgroundColor: "#fff" }} />
        </div>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={queryChangeHandler}
        />
      </div>
    </form>
  );
};

export default Search;
