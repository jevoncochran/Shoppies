import React, { useContext } from "react";
import "./Nominations.scss";
import { MovieContext } from "../../context/MovieContext";

const Nominations = () => {
  const { nominations, removeFromNoms } = useContext(MovieContext);

  return (
    <div className="noms">
      <p className="noms-headline">Nominations</p>
      {nominations.map((movie) => (
        <div className="noms-movie-div">
          <p className="noms-movie">
            {movie.Title} ({movie.Year})
          </p>
          <img className="noms-movie-poster" src={movie.Poster} />
          <button className="noms-btn" onClick={() => removeFromNoms(movie)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Nominations;
