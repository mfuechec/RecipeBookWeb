import React from "react";
import DrinksList from "./DrinksList.jsx";

let NewDrink = (props) => {
  let drinks;
  let text;
  if (props.lookingAtFavorites === false) {
    drinks = props.drinks;
    text = "Recipes";
  } else {
    drinks = props.favDrinks;
    text = "Favorites";
  }
  return (
    <div className="RecipesContainer">
      <div className="NewRecipesHeader">{text}</div>
      <div className="ListContainer">
        <DrinksList
          favDrinkNames={props.favDrinkNames}
          manageAPICalls={props.manageAPICalls}
          setDrink={props.setDrink}
          drinks={drinks}
        />
      </div>
    </div>
  );
};

export default NewDrink;
