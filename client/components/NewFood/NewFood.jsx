import React from "react";
import FoodsList from "./FoodsList.jsx";

let NewFood = (props) => {
  let foods;
  let text;
  if (props.lookingAtFavorites === false) {
    foods = props.foods;
    text = "Recipes";
  } else {
    foods = props.favFoods;
    text = "Favorites";
  }
  return (
    <div className="RecipesContainer">
      <div className="NewRecipesHeader">{text}</div>
      <div className="ListContainer">
        <FoodsList
          favFoodNames={props.favFoodNames}
          manageAPICalls={props.manageAPICalls}
          setFood={props.setFood}
          foods={foods}
        />
      </div>
    </div>
  );
};

export default NewFood;
