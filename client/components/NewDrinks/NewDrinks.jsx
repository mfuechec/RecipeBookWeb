import React from 'react';
import DrinksList from './DrinksList.jsx';

let NewDrink = (props) => {
    let drinks;
    let text;
    if (props.lookingAtFavorites === false) {
        drinks = props.drinks;
        text = 'Recipes';
    } else {
        drinks = props.favDrinks;
        text = 'Favorites';
    }
    return (
        <div id='NewDrinkRecipesContainer'>
            <div id='NewRecipesHeader'>{text}</div>
            <DrinksList manageAPICalls={props.manageAPICalls} setDrink={props.setDrink} drinks={drinks} />
        </div>
    )
};

export default NewDrink;