import { useState, useEffect } from "react";
import "./App.css";
//components
import List from "./components/List";

function App() {
  const [cards, setCards] = useState([
    {
      name: "British Shorthair",
      img: "./images/britishShorthair.jpg",
      clicked: false,
    },
    {
      name: "Ragdoll",
      img: "./images/ragdoll.jpg",
      clicked: false,
    },
    {
      name: "Birman",
      img: "./images/birman.jpg",
      clicked: false,
    },
    {
      name: "Scottish Fold",
      img: "./images/scottishFold.jpg",
      clicked: false,
    },
    {
      name: "Maine Coon",
      img: "./images/maineCoon.jpg",
      clicked: false,
    },
    {
      name: "Persian",
      img: "./images/persian.jpg",
      clicked: false,
    },
    {
      name: "Turkish Van",
      img: "./images/turkishVan.jpg",
      clicked: false,
    },
    {
      name: "Bombay",
      img: "./images/bombayCat.jpg",
      clicked: false,
    },
    {
      name: "Calico",
      img: "./images/calico.jpg",
      clicked: false,
    },
    {
      name: "Japanese Bobtail",
      img: "./images/bobtail.jpg",
      clicked: false,
    },
    {
      name: "Munchkin",
      img: "./images/munchkin.jpg",
      clicked: false,
    },
  ]);
  const [score, setScore] = useState(0);
  const [heighestScore, setHeighestScore] = useState(0);

  useEffect(() => {
    if (score > heighestScore) {
      setHeighestScore(score);
    }
  }, [score, heighestScore]);

  return (
    <div className="App">
      <div className="header">
        <div className="title">Cat Breed Memory Game</div>
        <div className="scores">
          <span>Highest Score: {heighestScore}</span>
          <span>Score: {score}</span>
        </div>
      </div>
      <div className= "content">
        <List
          setScore={setScore}
          cards={cards}
          setCards={setCards}
          score={score}
        />
      </div>
      <div className="footer">Created by Ataberk Tümay</div>
    </div>
  );
}

export default App;
