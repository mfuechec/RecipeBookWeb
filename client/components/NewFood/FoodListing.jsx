import React from 'react';
import {Link} from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let FoodListing = (props) => {
    let food = props.food;
    return (
        <div id='FoodListingContainer'>
                <div id='FoodListingContainerView'>
                    <Link id='FoodListingImageContainer' to='/Food' onClick={() => props.setFood(food)}>
                        <img id='FoodListingImage' src={food.image}/>
                    </Link>
                    <Link id='FoodListingNameContainer' to='/Food' onClick={() => props.setFood(food)}>
                        <div id='FoodListingNameText'>{food.name}</div>
                        <div id='FoodListingIngredientsList'>
                            <IngredientsList ingredients={food.ingredients}/>
                        </div>
                    </Link>
                    <div id='FoodListingFavContainer'>
                        <p id='FoodListingFavText'>Favorite</p>
                    </div>
                </div>
        </div>
    )
}

export default FoodListing;