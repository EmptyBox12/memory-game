import { useState, useEffect } from "react";
import "./App.css";
//components
import List from "./components/List";

function App() {
  const [cards, setCards] = useState([
    {
      name: "British Shorthair",
      img: "",
      clicked: false,
    },
    {
      name: "Ragdoll",
      img: "",
      clicked: false,
    },
    {
      name: "Birman",
      img: "",
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
      <div className="scores">
        <span>Highest Score: {heighestScore}</span>
        <span>Score: {score}</span>
      </div>
      <List
        setScore={setScore}
        cards={cards}
        setCards={setCards}
        score={score}
      />
    </div>
  );
}

export default App;
