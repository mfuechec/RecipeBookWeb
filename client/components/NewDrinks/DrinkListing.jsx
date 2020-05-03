import React from 'react';
import {Link} from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let DrinkListing = (props) => {
    let drink = props.drink;
    return (
        <div id='DrinkListingContainer'>
                <div id='DrinkListingContainerView'>
                    <Link id='DrinkListingImageContainer' to='/Drink' onClick={() => props.setDrink(drink)}>
                        <img id='DrinkListingImage' src={drink.image}/>
                    </Link>
                    <Link id='DrinkListingNameContainer' to='/Drink' onClick={() => props.setDrink(drink)}>
                        <div id='DrinkListingNameText'>{drink.name}</div>
                        <div id='DrinkListingIngredientsList'>
                            <IngredientsList ingredients={drink.ingredients}/>
                        </div>
                    </Link>
                    <div id='DrinkListingFavContainer' onPress={() => { props.manageAPICalls.editFavorites(drink, 'POST') }}>
                        <p id='DrinkListingFavText'>Favorite</p>
                    </div>
                </div>
        </div>
    )
}

export default DrinkListing;