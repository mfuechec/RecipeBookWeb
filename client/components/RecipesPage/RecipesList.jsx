import React from "react";
import RecipeListing from "./RecipeListing.jsx";

let RecipesList = (props) => {
  let list = props.recipes;
  return list.map((recipe, i) => (
    <RecipeListing
      setFood={props.setFood}
      setDrinks={props.setDrinks}
      favs={props.favs}
      manageAPICalls={props.manageAPICalls}
      recipe={recipe}
      key={i}
    />
  ));
};

export default RecipesList;
