import React from "react";

const DrinkDirections = (props) => {
  return (
    <div id="DrinkDirectionsContainer">
      <div>{props.drink.name}</div>
      <div>{props.drink.type}</div>
      <div>{props.drink.instructions}</div>
      <div>{props.drink.image}</div>
      <div>{props.drink.ingredients}</div>
      <div>{props.drink.measurements}</div>
    </div>
  );
};

export default DrinkDirections;
