import React from 'react';
import DrinksList from './DrinksList.jsx';

let NewDrink = (props) => {
    let drinks;
    if (props.lookingAtFavorites === false) {
        drinks = props.drinks;
    } else {
        drinks = props.favDrinks;
    }
    return (
        <div id='NewDrinkRecipesContainer'>
            <DrinksList manageAPICalls={props.manageAPICalls} setDrink={props.setDrink} drinks={drinks} />
        </div>
    )
};

export default NewDrink;