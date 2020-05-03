import React from 'react';
import FoodsList from './FoodsList.jsx';

let NewFood = (props) => {
    return (
        <div id='NewFoodRecipesContainer'>
            <FoodsList manageAPICalls={props.manageAPICalls} setFood={props.setFood} foods={props.foods} />
        </div>
    )
};

export default NewFood;