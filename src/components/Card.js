import React from "react";

export default function Card({ card, handleClick }) {
  return (
    <div onClick={() => handleClick(card)} className="card">
      <img src={card.img} alt="cat" />
      <span>{card.name}</span>
    </div>
  );
}
