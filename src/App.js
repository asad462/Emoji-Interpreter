import React, { useState } from "react";
import "./styles.css";
var EmojiList = {
  "🚣": "Person Rowing Boat",
  "🗻": "Mount Fuji",
  "🗼": "Tokyo Tower",
  "🎎": "Japanese Dolls",
  "💴": "Yen Banknote",
  "🗿": "Moyai",
  "🎍": "Kadomatsu",
  "🗾": "Map of Japan"
};

var emojisWeKnow = Object.keys(EmojiList);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = EmojiList[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = EmojiList[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter (Japan Edition) </h1>

      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
