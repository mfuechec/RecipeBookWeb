import React from "react";
import { Link } from "react-router-dom";

let RecipeListing = (props) => {
  let recipe = props.recipe;
  let color = "lightblue";
  function editFavorites() {}

  return (
    <div id="ListingContainer">
      <Link
        id="ListingContainerView"
        to="/Recipe"
        onClick={() => props.setFood(recipe)}
      >
        <div id="ListingImageContainer">
          <img id="ListingImage" src={recipe.image} />
        </div>
        <div id="ListingDetailsContainer">
          <div id="ListingNameContainer">
            <div id="ListingNameText">{recipe.name}</div>
          </div>
          <div id="ListingIngredientsAndFavContainer">
            <div id="ListingFavLinkContainer">
              <Link
                id="ListingFavContainer"
                style={{ color: color }}
                to="/RecipesPage"
                onClick={editFavorites}
              >
                <i id="ListingFavStar" className="fas fa-star"></i>
              </Link>
            </div>
            <div id="ListingIngredientsList">
              {/* <IngredientsList ingredients={recipe.ingredients} /> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeListing;
