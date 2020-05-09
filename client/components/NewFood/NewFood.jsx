import React from 'react';
import FoodsList from './FoodsList.jsx';

let NewFood = (props) => {
    let foods;
    let text;
    if (props.lookingAtFavorites === false) {
        foods = props.foods;
        text = 'Recipes';
    } else {
        foods = props.favFoods;
        text = 'Favorites';
    }
    return (
        <div id='NewFoodRecipesContainer'>
            <div id='NewRecipesHeader'>{text}</div>
            <FoodsList manageAPICalls={props.manageAPICalls} setFood={props.setFood} foods={foods} />
        </div>
    )
};

export default NewFood;