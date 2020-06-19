import React from "react";

const FoodDirections = (props) => {
  return (
    <div id="FoodDirectionsContainer">
      <div>{props.food.name}</div>
      <div>{props.food.type}</div>
      <div>{props.food.instructions}</div>
      <div>{props.food.image}</div>
      <div>{props.food.ingredients}</div>
      <div>{props.food.measurements}</div>
    </div>
  );
};

export default FoodDirections;
