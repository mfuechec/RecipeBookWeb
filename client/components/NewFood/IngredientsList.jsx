import React from "react";
import Ingredient from "./Ingredient.jsx";

let IngredientsList = (props) => {
  var ingredients = [];
  for (var i = 0; i < 6; i++) {
    if (props.ingredients[i] !== null || props.ingredients[i] !== undefined) {
      ingredients.push(props.ingredients[i]);
    }
  }
  return (
    <div id="IngredientsList">
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsList;
