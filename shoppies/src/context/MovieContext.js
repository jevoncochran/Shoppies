import React, { useState } from "react";
import axios from "axios";

const MovieContext = React.createContext();

const MovieProvider = (props) => {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);

  const [nominations, setNominations] = useState([]);

  const returnSearch = (query) => {
    axios
      .get(`http://www.omdbapi.com/?apikey=c55641f6&s=${query}`)
      .then((res) => {
        console.log(res.data);
        setSearch(query);
        setResults(res.data.Search);
      })
      .catch((err) => console.log(err));
  };

  const addToNoms = (movie) => {
    setNominations([...nominations, movie]);
  };

  const removeFromNoms = (movie) => {
    const newNoms = nominations.filter((el) => el.imdbID !== movie.imdbID);
    setNominations(newNoms);
  };

  return (
    <MovieContext.Provider
      value={{
        search,
        results,
        nominations,
        returnSearch,
        addToNoms,
        removeFromNoms,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

const MovieConsumer = MovieContext.consumer;

export { MovieContext, MovieConsumer };

export default MovieProvider;
