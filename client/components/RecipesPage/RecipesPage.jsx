import React from "react";
import RecipesList from "./RecipesList.jsx";

let RecipesPage = (props) => {
  let recipes;
  let text;
  let favs;

  if (props.whatIsSelected === "food") {
    if (props.lookingAtFavorites) {
      text = "Favorites";
      recipes = props.favFoods;
    } else {
      text = "Recipes";
      recipes = props.foods;
    }
    favs = props.favFoodNames;
  } else {
    if (props.lookingAtFavorites) {
      text = "Favorites";
      recipes = props.favDrinks;
    } else {
      text = "Recipes";
      recipes = props.drinks;
    }
    favs = props.favDrinkNames;
  }

  return (
    <div id="NewFoodRecipesContainer">
      <div id="NewRecipesHeader">{text}</div>
      <RecipesList
        favs={favs}
        manageAPICalls={props.manageAPICalls}
        setFoods={props.setFoods}
        setDrinks={props.setDrinks}
        recipes={recipes}
      />
    </div>
  );
};

export default RecipesPage;
