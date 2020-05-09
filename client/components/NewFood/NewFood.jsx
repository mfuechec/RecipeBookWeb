import React from 'react';
import FoodsList from './FoodsList.jsx';

let NewFood = (props) => {
    let foods;
    if (props.lookingAtFavorites === false) {
        foods = props.foods;
    } else {
        foods = props.favFoods
    }
    return (
        <div id='NewFoodRecipesContainer'>
            <FoodsList manageAPICalls={props.manageAPICalls} setFood={props.setFood} foods={foods} />
        </div>
    )
};

export default NewFood;