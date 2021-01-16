import React, { useContext, useEffect } from "react";
import "./Results.scss";
import { MovieContext } from "../../context/MovieContext";

const Results = () => {
  const { search, results, addToNoms, nominations } = useContext(MovieContext);

  useEffect(() => {
    console.log("search: ", search);
  }, [search]);

  return (
    <div className="results">
      <p className="results-headline">Results for "{search}"</p>
      {results &&
        results.map((movie) => (
          <div className="results-movie-div" key={movie.imdbID}>
            <p className="results-movie">
              {movie.Title} ({movie.Year})
            </p>
            <button
              className="results-btn"
              style={{
                backgroundColor:
                  nominations.includes(movie) || nominations.length === 5
                    ? "#fff"
                    : "green",
                border:
                  nominations.includes(movie) || nominations.length === 5
                    ? "1px solid #B2BCC5"
                    : "none",
                color:
                  nominations.includes(movie) || nominations.length === 5
                    ? "#B2BCC5"
                    : "white",
              }}
              disabled={
                nominations.includes(movie) || nominations.length === 5
                  ? true
                  : false
              }
              onClick={() => addToNoms(movie)}
            >
              Nominate
            </button>
          </div>
        ))}
    </div>
  );
};

export default Results;
