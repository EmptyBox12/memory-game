import React, {useEffect} from "react";
//components
import Card from "./Card";

export default function List({ setScore, cards, setCards }) {
  function handleClick(object) {
    let newArray = [...cards];
    let index = cards.findIndex((item) => item === object);
    if (newArray[index].clicked === true) {
      //resets game if card is clicked twice
      console.log("game over");
      setScore(0);
      let resetArray = newArray.map((cat) => ({...cat, clicked: false}));
      setCards(resetArray);
    } else if (newArray[index].clicked === false) {
      newArray[index].clicked = true;
      setScore((preState) => preState + 1);
      setCards(newArray);
    }
  }

  return (
    <div>
      {cards.map((card, index) => {
        return <Card card={card} handleClick={handleClick} key={index} />;
      })}
    </div>
  );
}
