import React, { useEffect } from "react";
//components
import Card from "./Card";

export default function List({ setScore, cards, setCards, score, setGameOver , gameOver}) {
  function handleClick(object) {
    let newArray = [...cards];
    let index = cards.findIndex((item) => item === object);
    if (newArray[index].clicked === true) {
      //resets game if card is clicked twice
      setGameOver(true);
      setScore(0);
      let resetArray = newArray.map((cat) => ({ ...cat, clicked: false }));
      setCards(resetArray);
    } else if (newArray[index].clicked === false) {
      if(gameOver){
        setGameOver(false);
      }
      newArray[index].clicked = true;
      setScore((preState) => preState + 1);
      setCards(newArray);
    }
  }
  useEffect(() => {
    setCards((cards) => cards.sort(() => Math.random() - 0.5));
  }, [score, setCards]);
  return (
    <div className="gridContainer">
      {cards.slice(0, 8).map((card, index) => {
        return <Card card={card} handleClick={handleClick} key={index} />;
      })}
    </div>
  );
}
