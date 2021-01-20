import React, { useState } from "react";
import "./styles.css";

const movieRecommend = {
  Bored: [
    { name: "The Avengers", rating: "4.2/5" },
    { name: "The Avengers:Infinity War", rating: "3.9/5" },
    { name: "The Avengers:End Game", rating: "4.1/5" }
  ],
  Sad: [
    {
      name: "The Hangover(series)",
      rating: "3.9/5"
    },
    {
      name: "When we first met",
      rating: "4.3/5"
    },
    {
      name: "Jhonny English(series)",
      rating: "4.4/5"
    }
  ],
  Romantic: [
    {
      name: "American pie(series)",
      rating: "4.1/5"
    },
    {
      name: "Kissing booth(series)",
      rating: "4.6/5"
    },
    {
      name: "Love",
      rating: "4.3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Bored");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Movie Recommendation </h1>

      <div>
        {Object.keys(movieRecommend).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <br />
      <div className="movies">
        <ul>
          {movieRecommend[selectedGenre].map((movie) => (
            <li key={movie.name}>
              {" "}
              <div> {movie.name} </div>
              <div> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
