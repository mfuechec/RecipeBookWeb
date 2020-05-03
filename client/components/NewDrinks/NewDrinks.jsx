import React from 'react';
import DrinksList from './DrinksList.jsx';

let NewDrink = (props) => {
    return (
        <div id='NewDrinkRecipesContainer'>
            <DrinksList manageAPICalls={props.manageAPICalls} setDrink={props.setDrink} drinks={props.drinks} />
        </div>
    )
};

export default NewDrink;