import React from 'react';
import {Link} from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let FoodListing = (props) => {
    let food = props.food;
    return (
        <div id='FoodListingContainer'>
            <Link to='/Food' onClick={() => props.setFood(food)}>
                <div id='FoodListingContainerView'>
                    <div id='FoodListingImageContainer'>
                        <img id='FoodListingImage' src={food.image}/>
                    </div>
                    <div id='FoodListingNameContainer'>
                        <p id='FoodListingNameText'>{food.name}</p>
                        <IngredientsList ingredients={food.ingredients}/>
                    </div>
                    <div id='FoodListingFavContainer'>
                        <p id='FoodListingFavText'>Favorite</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FoodListing;