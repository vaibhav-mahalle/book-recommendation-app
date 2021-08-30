import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  fiction: [
    { name: "God of small things", rating: "4/5" },
    { name: "The fountainhead", rating: "4.5/5" },
    { name: "Batatyachi chaal(Marathi)", rating: "4.5/5" }
  ],

  business: [
    {
      name: "Nick Sleep's letters to investors.",
      rating: "5/5"
    },
    {
      name: "Boardroom(marathi)",
      rating: "4/5"
    }
  ],
  biographies: [
    {
      name: "Poor charlie's almanack",
      rating: "5/5"
    },
    {
      name: "Shyamchi Aai(marathi)",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");

  function genreClickHandler(category) {
    setGenre(category);
  }
  return (
    <div className="App">
      <h1 style={{ color: "green" }}> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here are some of my <strong>favorite</strong> books.{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((category) => (
          <button
            onClick={() => genreClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "SlateGray"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", color: "SlateGray" }}>
                {" "}
                {book.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", color: "DarkKhaki" }}>
                {" "}
                {book.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
