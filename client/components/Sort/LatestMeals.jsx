import React from "react";

const LatestMeals = (props) => {
  return (
    <div
      id="LatestRecipes"
      onClick={() => props.manageAPICalls.searchForLatest()}
    >
      Latest Recipes!
    </div>
  );
};

export default LatestMeals;
