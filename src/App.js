import React, { useState } from "react";
import "./App.css";
import emojiDictionary from "./emojipedia";
import Card from "./components/Card/Card";
const randomEmojis = getRandomEmojis();

function getRandomEmojis(){
  let randomEmojiArray = []
  for(let i=0; i<5; i++){
    let randomNumber = Math.floor(Math.random() * 1805);
    randomEmojiArray.push(
      emojiDictionary[randomNumber].emoji
    );  
  }
  return randomEmojiArray;
}
console.log(randomEmojis);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here...");

  function searchEmoji(inputEmoji){
    let emoji = emojiDictionary.find(o => o.emoji === inputEmoji);
    if(emoji === undefined){
      return "Not an Emoji 😅"
    }
    return emoji;

  }

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    let emojiObj = searchEmoji(inputEmoji);
    setMeaning(emojiObj.description);
  }
  function emojiClickHandler(inputEmoji) {
    let emojiObj = searchEmoji(inputEmoji);
    setMeaning(emojiObj.description);
    setEmoji(inputEmoji);
  }
  return (
    <div className="App">
      <div className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/en/0/03/Emojipedia_logo.png"
        ></img>
        <h1>
          {" "}
          Parallelo<span className="heading-design">mojipedia</span>
        </h1>
        <input
          onChange={changeHandler}
          className="input"
          placeholder="Enter your emoji here"
        ></input>
        <span>
          <button className="search-form__button" aria-label="search">
            🔍
          </button>
        </span>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            padding: "2rem",
            justifyContent: "center"
          }}
        >
          <div style={{ paddingRight: "2.5rem" }}>
            <Card emoji={emoji} meaning={meaning} />
          </div>
          <div style={{ paddingLeft: "2.5rem" }}>
            <Card emoji={emoji} meaning={meaning} />
          </div>
        </div>
        <h2> Some Common Emojis </h2>
        {randomEmojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
