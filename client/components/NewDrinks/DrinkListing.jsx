import React from 'react';
import { Link } from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let DrinkListing = (props) => {
    let drink = props.drink;
    return (
        <div id='ListingContainer'>
            <div id='ListingContainerView'>
                <Link id='ListingImageContainer' to='/Drink' onClick={() => props.setDrink(drink)}>
                    <img id='ListingImage' src={drink.image} />
                </Link>
                <Link id='ListingNameContainer' to='/Drink' onClick={() => props.setDrink(drink)}>
                    <div id='ListingNameText'>{drink.name}</div>
                    <div id='ListingIngredientsList'>
                        <IngredientsList ingredients={drink.ingredients} />
                    </div>
                </Link>
                <div id='ListingFavContainer' onClick={() => { props.manageAPICalls.editFavorites(drink, 'POST') }}>
                    <p id='ListingFavText'>Favorite</p>
                </div>
            </div>
        </div>
    )
}

export default DrinkListing;