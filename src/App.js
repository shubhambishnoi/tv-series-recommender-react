import { useState } from "react";
import "./styles.css";

const tvSeriesList = {
  horror: [
    { name: "The Walking Dead (2010-2022)", rating: "8.2/10" },
    { name: "Stranger Things (2016-)", rating: "8.7/10" },
    { name: "Supernatural (2005-2020)", rating: "8.4/10" }
  ],

  thriller: [
    {
      name: "Hannibal (2013-2015)",
      rating: "8.5/10"
    },
    {
      name: "Breaking Bad (2008-2013)",
      rating: "9.4/10"
    }
  ],
  adventure: [
    {
      name: "Game Of Thrones (2011-2019)",
      rating: "9.2/10"
    },
    {
      name: "Rick and Morty (2013-)",
      rating: "9.2/10"
    }
  ]
};

export default function App() {
  const [currentGenre, setGenre] = useState("thriller");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        tvSeries<span style={{ color: "orange" }}>Recommender </span>
        📽
      </h1>
      <div className="genre">
        {Object.keys(tvSeriesList).map(function (genre) {
          return (
            <button
              onClick={() => genreClickHandler(genre)}
              key={genre}
              className="genreBtn"
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div className="list-of-series">
        <ul style={{ paddingInlineStart: "0" }}>
          {tvSeriesList[currentGenre].map(function (series) {
            return (
              <li
                key={series}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid white",
                  width: "50%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}>{series.name}</div>
                <div style={{ fontSize: "smaller" }}>{series.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
