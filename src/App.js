import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var seriesDB = {
    Action: [
      {
        name: "The Boys",
        rating: "⭐ ⭐ ⭐",
        NoofSeasons: "2"
      },
      {
        name: "Punisher",
        rating: "⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "2"
      },
      {
        name: "Daredevil",
        rating: "⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "3"
      },
      {
        name: "Arrow",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "8"
      },

      {
        name: "Game of thrones",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "8"
      }
    ],
    Drama: [
      {
        name: "The Haunting of Hill House",
        rating: "⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "2"
      },
      {
        name: "The Crown",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "4"
      },
      {
        name: "House of Cards",
        rating: "⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "6"
      },
      {
        name: "Mindhunter",
        rating: "⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "4"
      },
      {
        name: "Breaking Bad",
        rating: "⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "5"
      }
    ],
    Thriller: [
      {
        name: "Girl From Nowhere",
        rating: "⭐ ⭐ ⭐",
        NoofSeasons: "2"
      },
      {
        name: "Death Note(Anime)",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "1"
      },
      {
        name: "Attack On Titans(Anime)",
        rating: "⭐ ⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "4"
      },
      {
        name: "Narcos",
        rating: "⭐ ⭐ ⭐ ⭐",
        NoofSeasons: "4"
      },
      {
        name: "Dark",
        rating: "⭐ ⭐ ⭐",
        NoofSeasons: "3"
      }
    ]
  };

  var seriesWeKnow = Object.keys(seriesDB);

  const [selectedGenre, setSelectedGenre] = useState("Action");

  function clickEventHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>Web Series Recommendations</h1>
      <div>
        Here are some of personal favourites listed according to genres{" "}
      </div>
      <div
        style={{
          margin: "1rem",
          border: "2px solid white",
          borderRadius: "1rem"
        }}
      >
        {seriesWeKnow.map((genre) => {
          return (
            <button
              key={genre}
              onClick={() => clickEventHandler(genre)}
              style={{
                margin: "1rem",
                padding: "1rem",
                borderRadius: "1rem",
                fontSize: "large",
                cursor: "pointer"
              }}
            >
              {" "}
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        {seriesDB[selectedGenre].map((series, index) => (
          <div className="list" key={index}>
            <p>Name: {series.name}</p>
            <p>Rating: {series.rating}</p>
            <p>Year of Release: {series.NoofSeasons}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
