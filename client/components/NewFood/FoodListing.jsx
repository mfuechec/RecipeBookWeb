import React from 'react';
import { Link } from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let FoodListing = (props) => {
    let food = props.food;
    return (
        <div id='ListingContainer'>
            <div id='ListingContainerView'>
                <Link id='ListingImageContainer' to='/Food' onClick={() => props.setFood(food)}>
                    <img id='ListingImage' src={food.image} />
                </Link>
                <Link id='ListingNameContainer' to='/Food' onClick={() => props.setFood(food)}>
                    <div id='ListingNameText'>{food.name}</div>
                    <div id='ListingIngredientsList'>
                        <IngredientsList ingredients={food.ingredients} />
                    </div>
                </Link>
                <div id='ListingFavContainer' onClick={() => { props.manageAPICalls.editFavorites(food, 'POST') }}>
                    <p id='ListingFavText'>Favorite</p>
                </div>
            </div>
        </div>
    )
}

export default FoodListing;