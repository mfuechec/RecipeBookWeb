import React from "react";
import DrinkListing from "./DrinkListing.jsx";

let DrinksList = (props) => {
  let list = props.drinks;
  return list.map((drink, i) => (
    <DrinkListing
      favDrinkNames={props.favDrinkNames}
      manageAPICalls={props.manageAPICalls}
      setDrink={props.setDrink}
      key={i}
      drink={drink}
    />
  ));
};

export default DrinksList;
