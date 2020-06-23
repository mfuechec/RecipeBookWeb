import React from "react";
import { Link } from "react-router-dom";
import IngredientsList from "./IngredientsList.jsx";

let DrinkListing = (props) => {
  let drink = props.drink;
  let color = "";
  function editFavorites() {}
  if (props.favDrinkNames.includes(drink.name)) {
    color = "lightgoldenrodyellow";

    editFavorites = (e) => {
      e.preventDefault();
      props.manageAPICalls.deleteFromFavorites(drink);
    };
  } else {
    color = "lightblue";

    editFavorites = (e) => {
      e.preventDefault();
      props.manageAPICalls.addToFavorites(drink);
    };
  }
  return (
    <div className="ListingContainer">
      <Link
        className="ListingContainerView"
        to="/Drink"
        onClick={() => props.setDrink(drink)}
      >
        <img className="ListingImage" src={drink.image} />
        <div className="ListingNameText">{drink.name}</div>

        <i
          style={{ color: color }}
          onClick={editFavorites}
          className="fas fa-star"
        ></i>

        <IngredientsList ingredients={drink.ingredients} />
      </Link>
    </div>
  );
};

export default DrinkListing;
