import React from "react";
import { Link } from "react-router-dom";

const SortNav = (props) => {
  return (
    <div id="SortNavContainer">
      <Link
        id="SortNavSearchDrinksButton"
        to="/NewDrinks"
        onClick={() => {
          props.manageModal.searchDrinks();
        }}
      >
        <div id="SortNavDrinksText">Search Drinks</div>
      </Link>
      <Link
        id="SortNavSearchFoodsButton"
        to="/NewFood"
        onClick={() => {
          props.manageModal.searchFoods();
        }}
      >
        <div id="SortNavFoodText">Search Food</div>
      </Link>
      <div
        id="SortNavCloseButton"
        onClick={() => {
          props.manageModal.closeModal();
        }}
      >
        <div id="SortNavCloseText">Close</div>
      </div>
    </div>
  );
};

export default SortNav;
