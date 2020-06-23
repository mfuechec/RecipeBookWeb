import React from "react";
import { Link } from "react-router-dom";
import IngredientsList from "./IngredientsList.jsx";

let FoodListing = (props) => {
  let food = props.food;
  let color = "";
  function editFavorites() {}
  if (props.favFoodNames.includes(food.name)) {
    color = "lightgoldenrodyellow";

    editFavorites = (e) => {
      e.preventDefault();
      props.manageAPICalls.deleteFromFavorites(food);
    };
  } else {
    color = "lightblue";

    editFavorites = (e) => {
      e.preventDefault();
      props.manageAPICalls.addToFavorites(food);
    };
  }
  return (
    <div className="ListingContainer">
      <Link
        className="ListingContainerView"
        to="/Food"
        onClick={() => props.setFood(food)}
      >
        <img className="ListingImage" src={food.image} />
        <div className="ListingNameText">{food.name}</div>

        <i
          style={{ color: color }}
          onClick={editFavorites}
          className="fas fa-star"
        ></i>

        <IngredientsList ingredients={food.ingredients} />
      </Link>
    </div>
  );
};

export default FoodListing;
